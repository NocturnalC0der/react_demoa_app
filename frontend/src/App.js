// import Graph from './graph.js'
import { useMqtt } from './mqtt_subscriber.js';
import { mqtt_params } from './config.js';
// import mqtt from 'mqtt';

// const host = mqtt_params.host
// const port = mqtt_params.port
// const mqttUrl = `mqtts://${host}:${port}`
// const topic = mqtt_params.topic

// Temporary hardcoded values for testing
// For local development when running with npm start
const host = window.location.hostname; // This will be 'localhost' or your actual hostname
const port = '9001'; // WebSocket port from your mosquitto.conf
const mqttUrl = `ws://${host}:${port}`; // Use WebSockets protocol
const topic = 'data/messages';

console.log("Using hardcoded values:");
console.log("Host:", host, "Port:", port, "Topic:", topic);

// At the top of App.js, add this
// console.log("App.js is loading");
// console.log("MQTT Params:", JSON.stringify(mqtt_params));
// console.log("Host:", host, "Port:", port, "Topic:", topic);

function App() {
    const { isConnected, latestMessage } = useMqtt(
        mqttUrl,
        topic
    );

    return <div>
        <h1>Current number:</h1>
        <h2>{latestMessage}</h2>
        </div>
    // return <div><Graph /></div>
   
};

export default App;