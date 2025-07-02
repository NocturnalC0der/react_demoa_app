import random
import time

def get_input():
    try:
        
        # x_coor = random.randint(1, 30)
        y_coor = random.randint(1, 30)
        
        return y_coor
        
    except ValueError as ve:
        print("Plese enter a valid number.")


