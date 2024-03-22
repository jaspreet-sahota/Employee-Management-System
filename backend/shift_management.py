from fastapi import APIRouter
from pydantic import BaseModel
from typing import Dict, List

router = APIRouter()

# Dummy database to store shift data
shifts_db = {}


class Shift(BaseModel):
    shift_id: str
    start_time: str
    end_time: str
    location: str
    # Other shift-related fields


# Endpoint to create a new shift
@router.post("/shifts/")
async def create_shift(shift: Shift):
    shifts_db[shift.shift_id] = shift.dict()
    return {"message": "Shift created successfully"}


# Endpoint to get all shifts
@router.get("/shifts/")
async def get_all_shifts():
    return shifts_db
