from pydantic import BaseModel, Field
from typing import Tuple

class CoorsResponse(BaseModel):
    """Response for frontend with coordinates in a list"""
    
    coors: Tuple[int, int] = Field(..., description="X and Y coordinates for the graph")
    
    
