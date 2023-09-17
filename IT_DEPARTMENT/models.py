from django.db import models

class Teacher(models.Model):
    sid = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    username=models.CharField(max_length=255, default="NIT_Sgr77890")
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    temporary = models.TextField(max_length=255,blank=True)

class Course(models.Model):
    cid = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    semester=models.CharField(max_length=255)
    description = models.TextField(blank=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,null=True,blank=True)

# Create your models here.
