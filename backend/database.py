import psycopg2
from config import db_params, db_statements

def write_to_db(x: int, y: int, database_params=db_params, database_statements=db_statements):

    
    with psycopg2.connect(**database_params) as connection:
        
        cursor = connection.cursor()
        insert_stmt = database_statements['insert_coors']
        
        cursor.execute(insert_stmt, (x, y))

        # Since we are writing
        connection.commit()
        
        
        
def read_from_db(database_params=db_params, database_statements=db_statements):
    
    with psycopg2.connect(**database_params) as connection:
    
        cursor = connection.cursor()
        select_stmt = database_statements['select_coors']
        # SELECT x_value, y_value FROM graph_data ORDER BY timestamp DESC LIMIT 1
        
        cursor.execute(select_stmt)
        result = cursor.fetchone()
        x, y = result[0], result[1]
        
        coor_tuple = (x, y)
        
        return coor_tuple

        
    