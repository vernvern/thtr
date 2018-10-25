from django.db import models

from Public.models import BaseModel


class UserModel(BaseModel):
    account = models.CharField(max_length=20)
    nick_name = models.CharField(max_length=20)
    password = models.CharField(max_length=32)
    email = models.EmailField()
