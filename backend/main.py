"""
When running inside a container we must use the -it flag (interactive.)
Docker doesn't provide terminal input by default so we need to specify it.
"""

import time, threading
from api import start_server_thread
from terminal_input import get_input
from database import write_to_db
from mqtt_publisher import send
from mqtt_subscriber import start_subscriber

# subscriber_thread = threading.Thread(target=start_subscriber, daemon=True)

def main():
    """Main app functionality"""
    end = False
    
    # start_subscriber()
    # subscriber_thread.start()
    
    while not end:
        y = get_input()

        write_to_db(y)
        
        res = send(y)
        print(f"Message send result: {res}")
        
        time.sleep(10)


if __name__ == "__main__":
    start_server_thread() #Start API server
    time.sleep(1)
    main() #Start app functionality
