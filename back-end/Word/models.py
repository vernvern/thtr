from django.db import models

from Public.models import BaseModel


class WordModel(BaseModel):
    word = models.CharField(max_length=30)
    content = models.TextField()
