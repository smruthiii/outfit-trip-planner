# backend/app/schemas.py

from pydantic import BaseModel
from typing import Optional

class TripCreate(BaseModel):
    title: str
    description: Optional[str] = None
    

class Trip(BaseModel):
    id: int
    title: str
    description: Optional[str] = None

    class Config:
        orm_mode = True
