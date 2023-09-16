from django.db import models

class Teacher(models.Model):
    sid = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    temporary = models.TextField(max_length=255)
# Create your models here.
