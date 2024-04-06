from typing import Optional
from datetime import datetime, date, time
from pydantic import UUID4, BaseModel, EmailStr, validator, Field
from .general import Response
from .user import UserAccount, UserAccountResponse
from app.models import ShiftStatus


class CreateStore(BaseModel):
    name: str
    location: str


class Store(CreateStore):
    id: int
    users: Optional[list[UserAccount]] = None


class StoreRegular(CreateStore):
    id: int


class StoreResponse(Response, Store):
    pass


class StoresResponse(Response):
    stations: list[Store]


class StatusUpdate(BaseModel):
    status: ShiftStatus


##################################################

class RequestShift(BaseModel):
    assigned_store: int
    description: Optional[str] = None
    shift_date: date
    start_time: time
    end_time: time
    

# class ReportAccident(BaseModel):
#     location: str
#     description: Optional[str] = None
#     assigned_station: int

##################################################


class Shift(Response):
    id: int
    posted_by: UserAccount
    assigned_to: Optional[UserAccount] = None
    description: str
    location: str
    date_reported: datetime
    date_assigned: Optional[datetime] = None
    status: ShiftStatus
    assigned_store: StoreRegular
    shift_date: date
    start_time: time
    end_time: time


class Shifts(Response):
    accidents: list[Shift]


class AddChat(BaseModel):
    message: str
    shift: int


class ShiftChat(BaseModel):
    id: int
    user: UserAccount
    message: str
    date_sent: datetime


class ShiftChats(Response):
    chats: list[ShiftChat]
