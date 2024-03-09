from fastapi import APIRouter
from pydantic import BaseModel
from typing import Dict, List

router = APIRouter()

# Dummy database to store schedule data
schedules_db = {}


class Schedule(BaseModel):
    week_start_date: str
    shifts: List[Dict]
    # Other schedule-related fields


# Endpoint to create a new schedule
@router.post("/schedules/")
async def create_schedule(schedule: Schedule):
    schedules_db[schedule.week_start_date] = schedule.dict()
    return {"message": "Schedule created successfully"}


# Endpoint to get all schedules
@router.get("/schedules/")
async def get_all_schedules():
    return schedules_db
