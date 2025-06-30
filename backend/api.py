from terminal_input import get_input
from database import write_to_db, read_from_db
from fastapi import FastAPI
from models import CoorsResponse
import threading
import uvicorn

app = FastAPI()

@app.get("/", response_model=CoorsResponse)
def get_coors():    
    # Get latest db coors:
    coor_tuple = read_from_db()    
    
    response = CoorsResponse(
        coors=coor_tuple
    )
    
    return response

def run_server(app=app):
    uvicorn.run(app=app, host="0.0.0.0", port=8000)

def start_server_thread(app=app):
    bg_thread = threading.Thread(target=run_server)
    bg_thread.daemon = True
    bg_thread.start()
    
    


