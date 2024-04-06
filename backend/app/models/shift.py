from .user import UserAccount
from tortoise import fields
from tortoise.models import Model
from enum import Enum


class Store(Model):
    store_id = fields.IntField(pk=True)
    store_name = fields.CharField(max_length=20)
    store_location = fields.CharField(max_length=100)


class ShiftStatus(str, Enum):
    REQUESTED = "REQUESTED"
    PENDING = "PENDING"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"


class Shift(Model):
    shift_id = fields.IntField(pk=True)
    posted_by = fields.ForeignKeyField("models.UserAccount", related_name="shifts")
    assigned_to = fields.ForeignKeyField("models.UserAccount", related_name="assigned_shifts", null=True)
    assigned_store = fields.ForeignKeyField("models.Store", related_name="shifts")
    description = fields.TextField()
    date_posted = fields.DatetimeField(auto_now_add=True)
    date_assigned = fields.DatetimeField(null=True)
    request_status = fields.CharEnumField(ShiftStatus, default=ShiftStatus.REQUESTED)

    shift_date = fields.DateField()
    start_time = fields.TimeField()
    end_time = fields.TimeField()


class ShiftChat(Model):
    chat_id = fields.IntField(pk=True)
    shift = fields.ForeignKeyField("models.Shift", related_name="chats")
    user = fields.ForeignKeyField("models.UserAccount", related_name="chats")
    message = fields.TextField()
    date_sent = fields.DatetimeField(auto_now_add=True)