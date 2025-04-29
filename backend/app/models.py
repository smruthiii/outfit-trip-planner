# backend/app/models.py

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, nullable=True)

    events = relationship("Event", back_populates="trip")

class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    trip_id = Column(Integer, ForeignKey("trips.id"))
    event_name = Column(String)
    time_of_day = Column(String)
    vibe = Column(String)
    my_outfit = Column(String)
    partner_outfit = Column(String)
    order = Column(Integer)

    trip = relationship("Trip", back_populates="events")
