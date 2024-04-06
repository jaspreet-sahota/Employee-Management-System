from fastapi import APIRouter, HTTPException, Security
from app.models.user import UserAccount
from app.schemas.user import (
    UserAccountCreateRequest,
    UserAccountResponse,
    AddUserToStore,
)
from app.models import Store
from typing import Annotated
from app.services.auth.utils import get_current_user

from app.utils.response import responses
from app.utils.exception import ShiftManagementException
from app.services.auth import hash_password
#from app.queue import check_if_assign_is_possible


router = APIRouter(tags=["User Account"])


# 'USER' ENDPOINT#1 - Create User Account, associated to a specific store
@router.post("/", response_model=UserAccountResponse, responses=responses)
async def createUserAccount(data: UserAccountCreateRequest):
    hashed_password = await hash_password(data.password)
    data = data.dict()
    data.pop("password")
    user_account = await UserAccount.create(**data, hashed_password=hashed_password)
    user_account = await UserAccount.all().filter(uuid=user_account.uuid).first().prefetch_related("users")
    return user_account


# USER ENDPOINT#2 - Get ALL User Accounts, associated to a specific store
@router.get("/", response_model=list[UserAccountResponse], responses=responses)
async def getAllAccounts(current_user: UserAccount = Security(get_current_user)):
    user_accounts = await UserAccount.all().prefetch_related("users")
    return user_accounts


# USER ENDPOINT#3 - Get MY Account
@router.get("/me", response_model=UserAccountResponse, responses=responses)
async def getMyAccount(current_user: UserAccount = Security(get_current_user)):
    current_user = await UserAccount.all().filter(uuid=current_user.uuid).first().prefetch_related("users")
    return current_user

'''
# USER ENDPOINT#4 - Assigning a store to registed user
@router.post("/add/store", response_model=UserAccountResponse, responses=responses)
async def add_user_to_station(data: AddUserToStore):
    user_account = await UserAccount.all().filter(uuid=data.user).first()
    if not user_account:
        raise ShiftManagementException("E1023", 404)

    store = await Store.all().filter(id=data.store).first()
    if not store:
        raise ShiftManagementException("E1024", 404)

    user_account.store = store
    await user_account.save()
    user_account = await UserAccount.all().filter(uuid=user_account.uuid).first().prefetch_related("users")
    await check_if_assign_is_possible(store.id)
    return user_account

'''