import paho.mqtt.client as mqtt
import os, random, json
from config import mqtt_params

host = mqtt_params['host']
port = mqtt_params['port']
topic = mqtt_params['topic']

def on_connect(client, userdata, flags, rc):
    if rc == 0: #if No error happened
        print(f'PUBLISHER Connected to broker, client {client}')
    
    else:
        print('Error during PUB connection')
        
def on_publish(client, userdata, mid):
    print(f'Message {mid} published.')

pub_client = mqtt.Client()
pub_client.on_connect = on_connect
pub_client.on_publish = on_publish


pub_client.connect(host, int(port), 60) #connection timeout
pub_client.loop_start() #CRITICAL -- the pub_client needs to run a network loop to handle incoming and outgoing messages!

def send(msg, client=pub_client, topic=topic):
    msg_id = random.randint(0, 100)
    # message_content = 
    payload = json.dumps({
        "id": msg_id,
        'coor': msg
    })
    result = client.publish(topic, payload, qos=1)
    print(f'Send message {msg}, with id {msg_id}')
    return result