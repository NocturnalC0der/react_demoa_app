// Add this debugging to config.js
console.log('Environment variables in config.js:');
console.log('REACT_APP_MQTT_HOST:', process.env.REACT_APP_MQTT_HOST);
console.log('REACT_APP_MQTT_PORT:', process.env.REACT_APP_MQTT_PORT);
console.log('REACT_APP_MQTT_TOPIC:', process.env.REACT_APP_MQTT_TOPIC);

export const mqtt_params = {
    host: process.env.REACT_APP_MQTT_HOST || 'mqtt-broker',
    port: process.env.REACT_APP_MQTT_PORT || '1883',
    topic: process.env.REACT_APP_MQTT_TOPIC || 'data/messages'
};