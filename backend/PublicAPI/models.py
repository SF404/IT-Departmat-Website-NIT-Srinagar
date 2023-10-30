from django.db import models

# Create your models here.

class Phd_Student(models.Model):
    phd_student_id = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    enroll= models.TextField(max_length=255,blank=True)
    description = models.CharField(max_length=255,blank=True)
    phone =models.BigIntegerField(unique=True)
    research_field = models.TextField(max_length=255,blank=True)
    date=models.DateTimeField(auto_now_add=True)
    profile_photo = models.ImageField(upload_to='phd_student/')

