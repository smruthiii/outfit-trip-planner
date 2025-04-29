# backend/app/crud.py

from sqlalchemy.orm import Session
from . import models, schemas

def create_trip(db: Session, trip: schemas.TripCreate):
    db_trip = models.Trip(title=trip.title, description=trip.description)
    db.add(db_trip)
    db.commit()
    db.refresh(db_trip)
    return db_trip
