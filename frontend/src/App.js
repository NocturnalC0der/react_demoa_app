// import Graph from './graph.js'
import { useMqtt } from './mqtt_subscriber.js';
import { websockets_params } from './config.js';
;


const mqttUrl = `ws://${websockets_params.host}:${websockets_params.port}`; // Use WebSockets protocol
const topic = websockets_params.topic


function App() {
    const { isConnected, latestMessage } = useMqtt(
        mqttUrl,
        topic
    );

    return <div>
        <h1>Current number:</h1>
        <h2>{latestMessage}</h2>
        <br></br>
        <h1>Connected:</h1>
        <h2>{isConnected}</h2>
        </div>
    // return <div><Graph /></div>
   
};

export default App;