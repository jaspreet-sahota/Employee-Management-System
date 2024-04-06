from tortoise import fields
from tortoise.models import Model

class UserToken(Model):
    jti = fields.UUIDField(pk=True)
    user = fields.ForeignKeyField("models.UserAccount", related_name="tokens")
    refresh_token = fields.CharField(max_length=2000)
    expire = fields.DatetimeField()


