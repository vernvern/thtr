from django.db import models

# Create your models here.


class BaseModel(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    date_modifid = models.DateTimeField(auto_now=True)
    removed = models.BooleanField()
    id = models.UUIDField(primary_key=True)


class UserModel(BaseModel):
    account = models.CharField(max_length=20)
    nick_name = models.CharField(max_length=20)
    password = models.CharField(max_length=32)
    email = models.EmailField()
