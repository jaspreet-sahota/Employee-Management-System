from fastapi import APIRouter, HTTPException, Security
from app.models import UserAccount
from app.models import Shift as ShiftModel
from app.models import ShiftChat as ShiftChatModel
from app.schemas.shift import (
    AddChat,
    ShiftChat,
    ShiftChats,
)
from typing import Annotated
from app.services.auth.utils import get_current_user

from app.utils.response import responses
from app.utils.exception import ShiftManagementException


chat_router = APIRouter(tags=["Accident Chat"])

# 'CHAT' ENDPOINT#1 - Create a chat for a specific shift
@chat_router.post("/{shift_id}/chat", response_model=ShiftChat, responses=responses)
async def createChat(shift_id: int, data: AddChat, current_user: UserAccount = Security(get_current_user)):
    shift = await ShiftModel.get_or_none(shift_id=shift_id)
    if not shift:
        raise HTTPException(status_code=404, detail="Shift NOT found!")

    chat = await ShiftChatModel.create(shift=shift, user=current_user, message=data.message)
    chat = await ShiftChatModel.get(id=chat.id).prefetch_related("user")
    return chat


# 'CHAT' ENDPOINT#2 - Get all chats for a specific shift
@chat_router.get("/{shift_id}/chat", response_model=ShiftChats, responses=responses)
async def getAllChats(shift_id: int, current_user: UserAccount = Security(get_current_user)):
    shift = await ShiftModel.get_or_none(shift_id=shift_id)
    if not shift:
        raise HTTPException(status_code=404, detail="Shift NOT found!")

    chats = await ShiftChatModel.filter(shift=shift).prefetch_related("user")
    return {"chats": chats}




