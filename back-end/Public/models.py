from django.db import models

# Create your models here.


class BaseModel(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    date_modifid = models.DateTimeField(auto_now=True)
    removed = models.BooleanField(default=False, blank=True)
    id = models.UUIDField(primary_key=True)

    class Meta:
        abstract = True
