// Add this debugging to config.js
console.log('Environment variables in config.js:');
console.log('REACT_APP_MQTT_HOST:', process.env.REACT_APP_MQTT_HOST);
console.log('REACT_APP_MQTT_PORT:', process.env.REACT_APP_MQTT_PORT);
console.log('REACT_APP_MQTT_TOPIC:', process.env.REACT_APP_MQTT_TOPIC);

export const websockets_params = {
    host: process.env.REACT_APP_WEBSOCKETS_HOST,
    port: process.env.REACT_APP_WEBSOCKETS_PORT,
    topic: process.env.REACT_APP_MQTT_TOPIC,
    options: {
        username: process.env.REACT_APP_MQTT_USERNAME,
        password: process.env.REACT_APP_MQTT_PASSWORD
    }
};

console.log(websockets_params)