

def get_input():
    have_coors = False
    
    while not have_coors:
        
        try:
            
            x_coor = int(input("Enter an x coordinate: "))
            y_coor = int(input("Enter a y coordinate: "))
            
            have_coors = True
            
            return x_coor, y_coor
            
        except ValueError as ve:
            print("Plese enter a valid number.")
    
    
