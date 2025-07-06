import mqtt from 'mqtt';
import {mqtt_params} from './config.js'
import 'mqtt';
import { useState, useEffect, useRef } from 'react';

export const useMqtt = (mqttUrl, topic) => {
    // Define react hooks:
    const [isConnected, setIsConnected] = useState(false);
    const [latestMessage, setLatestMessage] = useState(null);

    const clientRef = useRef(null);
    const hasReloadedRef = useRef(false); // Prevent infinite reloads

    function subscribe(topic, client) {
        client.subscribe(topic, {qos:1}, (err) => {
            if (err) {
                console.log(`Failed to§ subscribe to topic ${topic}:`, err)
            } else {
                console.log(`Connected to topic ${topic} successfully!`);
            }
        });
    }


    useEffect(() => {        
        const client = mqtt.connect(mqttUrl, {
            reconnectPeriod: 0, // Disable auto-reconnect
            connectTimeout: 5000
        })

        clientRef.current = client;

         // Connection handling:
        client.on('connect', () => {
            console.log("JS client connected to mqtt-broker!")
            setIsConnected(true);
            subscribe(topic, client)
            console.log("Subscribed to topic")
        });

        // Add disconnect handler
        client.on('disconnect', () => {
            console.log("MQTT client disconnected");
            setIsConnected(false);

            // Reload page only once to avoid infinite loops
            if (!hasReloadedRef.current) {
                hasReloadedRef.current = true;
                console.log("Reloading page to reset connection...");
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // Wait 2 seconds before reload
            }
        });

        //  // Add error handler with reload
        // client.on('error', (error) => {
        //     console.log("MQTT connection error:", error);
        //     setIsConnected(false);
            
        // });
    
    
        
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
            console.log("Disconnecting MQTT JS client.")
            if (client && client.connected) {
                client.unsubscribe(topic);
                client.end(false); // Graceful disconnect instead of forced
            }
            setIsConnected(false);
        };
        }, [mqttUrl, topic]);
    
    return {
        isConnected,
        latestMessage
    };

}