import os


db_params = {
    'database': os.getenv("DB_NAME"),
    'host': os.getenv("DB_HOST"),
    'port': os.getenv("DB_PORT"),
    'user': os.getenv("DB_USER"),
    'password': os.getenv("DB_PASSWORD"),

}

db_statements = {
    'insert_coors': """INSERT INTO graph_data (x_value, y_value) VALUES (%s, %s)""",
    'select_coors': """SELECT x_value, y_value FROM graph_data ORDER BY timestamp DESC LIMIT 1"""
} 