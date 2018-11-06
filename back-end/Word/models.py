from django.db import models

from Public.models import BaseModel


class WordModel(BaseModel):
    word = models.CharField(max_length=45)
    title = models.CharField(max_length=100)
    content = models.TextField()
