import mqtt from 'mqtt';
import {mqtt_params} from './config.js'
import 'mqtt';
import { useState, useEffect, useRef } from 'react';

export const useMqtt = (mqttUrl, topic) => {
    // Define react hooks:
    const [isConnected, setIsConnected] = useState(false);
    const [latestMessage, setLatestMessage] = useState(null);

    const clientRef = useRef(null);

    function subscribe(topic, client) {
        client.subscribe(topic, {qos:1}, (err) => {
            if (err) {
                console.log(`Failed to subscribe to topic ${topic}:`, err)
            } else {
                console.log(`Connected to topic ${topic} successfully!`);
            }
        });
    }


    useEffect(() => {        
        const client = mqtt.connect(mqttUrl)

        clientRef.current = client;

         // Connection handling:
        client.on('connect', () => {
            console.log("JS client connected to mqtt-broker!")
            setIsConnected(true);
            subscribe(topic, client)
            console.log("Subscribed to topic")
        });
    
        
        client.on('message', (topic, message) => {
            try {
                const data = JSON.parse(message.toString());
                const coor = data['coor']; //Get the coordinate
                console.log(`Recieved coordinate ${coor}, from topic ${topic}`)

                // Set the recieved coordinate as the lateset message:
                setLatestMessage(coor)
                
            } catch (error) {
                console.log(`Error parsing message: ${error}`);
            };
        });

        return () => {
            if (clientRef.current) {
                clientRef.current.end();
            }
            };
        }, [mqttUrl]);
    
    return {
        isConnected,
        latestMessage
    };

}