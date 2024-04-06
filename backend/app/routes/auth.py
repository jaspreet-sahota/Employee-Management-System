from typing import Annotated
from fastapi import APIRouter, Depends, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.models import UserAccount, UserToken
from app.schemas.auth import (
    TokenData,
    TokenResponse,
    RefreshTokenData,
    UsernamePasswordLoginRequest,
    RefreshTokenRequest,
)
from app.schemas.general import Response
from app.utils.exception import ShiftManagementException
from app.utils.response import responses
from app.services.auth import validate_refresh_token
from app.services.auth import hash_password, check_password



router = APIRouter(tags=["Authentication"])



async def _password_login(data) -> TokenResponse:
    user: UserAccount = await UserAccount.get_by_identifier(data.username)
    if await user.check_password(data.password):
        return await user.create_access_token()
    raise ShiftManagementException("E1002")


# 'AUTH' ENDPOINT#1 - OAuth2 login feature
@router.post("/oauth2", response_model=TokenResponse, responses=responses, include_in_schema=False)
async def oauth2_login(data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    return await _password_login(data)


# 'AUTH' ENDPOINT#2 - Loging using password
@router.post("/password", response_model=TokenResponse, responses=responses)
async def password_login(data: UsernamePasswordLoginRequest):
    hashed_pass = await hash_password("mypassword")
    result = await check_password(hashed_pass, "mypassword")
    #print(result) 
    return await _password_login(data)


# 'AUTH' ENDPOINT#3 - Refreshing an access token
@router.post("/refresh", response_model=TokenResponse, responses=responses)
async def refresh_token(refresh_token: RefreshTokenRequest):
    refresh_token_data: RefreshTokenData = await validate_refresh_token(refresh_token.refresh_token)
    user_token: UserToken = await UserToken.get_or_none(jti=refresh_token_data.jti)

    if not user_token:
        raise ShiftManagementException("E1017")

    user: UserAccount = await user_token.user
    new_access_token: TokenResponse = await user.create_access_token()
    await refresh_token.delete()
    return new_access_token


# 'AUTH' ENDPOINT#4 - Logging out a user
@router.post("/logout", response_model=Response, responses=responses)
async def logout(refresh_token: RefreshTokenRequest):
    refresh_token_data: RefreshTokenData = await validate_refresh_token(
        refresh_token.refresh_token
    )
    user_token: UserToken = await UserToken.get_or_none(pk=refresh_token_data.jti)
    if not refresh_token:
        return Response()
    await user_token.delete()
    return Response()
