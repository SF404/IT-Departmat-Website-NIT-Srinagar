from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    username = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    role_choices = (
        ('admin', 'Admin'),
        ('faculty', 'Faculty'),
    )
    role = models.CharField(max_length=255, choices=role_choices, default='faculty')

    REQUIRED_FIELDS = ['role']

    def __str__(self):
        return f"{self.username} ----> {self.first_name}"
