import paho.mqtt.client as mqtt
import os, json
from config import mqtt_params
import random

host = mqtt_params['host']
port = mqtt_params['port']
topic = mqtt_params['topic']

def on_connect(client, userdata, flags, rc):
    if rc == 0: #if No error happened
        print(f'SUBSCRIBER Connected to broker, client {client}')
    
    else:
        print('Error during SUB connection')
        
def on_message(client, userdata, message):
    payload = json.loads(message.payload.decode('utf-8'))
    msg_id = payload['id']
    msg_content = payload['coor']
    print(f'Subcriber recieved message: {msg_content}, with id {msg_id}')

sub_client = mqtt.Client()
sub_client.on_connect = on_connect
sub_client.on_message = on_message

def start_subscriber():
    sub_client.connect(host, int(port), 60) #connection timeout
    sub_client.subscribe(topic)
    sub_client.loop_start() #CRITICAL -- the client needs to run a network loop to handle incoming and outgoing messages!
        

# def read(client=client, topic=topic):
#     msg_num = random.randint(0, 100)
#     result = client.publish(topic, f'Test message with number {msg_num}', qos=1)
#     return result