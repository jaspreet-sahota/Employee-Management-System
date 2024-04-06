import uuid
from datetime import datetime, timedelta

import pytz
from tortoise import fields
from tortoise.models import Model

from app.config import auth_settings
from app.schemas.auth import TokenResponse
from app.services.auth import check_password, create_access_token, hash_password
from app.utils.exception import ShiftManagementException
from app.utils.validation import is_valid_email, is_valid_phone_number
from .token import UserToken
from enum import Enum

class UserAccountType(str, Enum):
    MANAGER = "Manager"
    EMPLOYEE = "Employee"

class UserAccount(Model):
    uuid = fields.UUIDField(pk=True, default=uuid.uuid4)
    store = fields.ForeignKeyField("models.Store", related_name="users", null=True)
    username = fields.CharField(max_length=25, unique=True)
    hashed_password = fields.CharField(max_length=25, null=True)
    account_type = fields.CharEnumField(UserAccountType, default=UserAccountType.EMPLOYEE)

    email = fields.CharField(max_length=50, unique=True)
    first_name = fields.CharField(max_length=20, null=True)
    last_name = fields.CharField(max_length=20, null=True)
    date_joined = fields.DatetimeField(auto_now_add=True)
    last_login = fields.DatetimeField(auto_now=True)
    is_working = fields.BooleanField(default=False)



    def __str__(self):
        return f"{self.username}"

    async def set_password(self, password: str) -> None:
        self.hashed_password = await hash_password(password)
        await self.save()

    async def check_password(self, password) -> bool:
        return await check_password(self.hashed_password, password)

    async def create_access_token(self) -> TokenResponse:
        jti = uuid.uuid4()
        refresh_expire = datetime.utcnow() + timedelta(
            days=auth_settings.refresh_token_expire_days
        )

        token: TokenResponse = await create_access_token(
            self.uuid,
            jti,
            self.username,
            self.email,
        )
        await UserToken.create(
            jti=jti,
            user=self,
            refresh_token=token.refresh_token,
            expire=refresh_expire,
        )
        return token
    
    @classmethod
    async def get_by_identifier(cls, identifier: str) -> "UserAccount":
        if is_valid_email(identifier):
            user_field = "email"
        else:
            user_field = "username"

        query = {user_field: identifier.lower()}

        user = await cls.get_or_none(**query)

        if not user:
            raise ShiftManagementException("E1002")

        return user
    
