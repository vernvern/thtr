from django.db import models

from Public.models import BaseModel


class UserModel(BaseModel):
    email = models.EmailField()
    nick_name = models.CharField(max_length=20)
    password = models.CharField(max_length=32)
    description = models.CharField(max_length=200)
