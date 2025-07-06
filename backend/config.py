import os
from dotenv import load_dotenv
load_dotenv()

db_params = {
    'host': os.getenv("DB_HOST"),
    'database': os.getenv("DB_NAME"),
    'user': os.getenv("DB_USER"),
    'password': os.getenv("DB_PASSWORD"),
    'port': os.getenv("DB_PORT"),

}

print(db_params)

db_statements = {
    'insert_coors': """INSERT INTO graph_data (y_value) VALUES (%s)""",
    'select_coors': """SELECT y_value FROM graph_data ORDER BY timestamp DESC LIMIT 1"""
} 

mqtt_params = {
    'host': os.getenv("MQTT_HOST"),
    'port': os.getenv("MQTT_PORT"),
    'topic': os.getenv("MQTT_TOPIC"),
    'username': os.getenv("MQTT_BACKEND_USER"),
    'password': os.getenv("MQTT_BACKEND_PASSWORD") 
    
}