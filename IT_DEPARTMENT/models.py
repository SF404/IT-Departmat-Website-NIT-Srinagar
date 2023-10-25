from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Teacher(models.Model):
    teacher_id = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    description = models.CharField(max_length=255,blank=True)
    phone =models.BigIntegerField(unique=True)
    research_field = models.TextField(max_length=255,blank=True)
    date=models.DateTimeField(auto_now_add=True)
    profile_photo = models.ImageField(upload_to='teacher_profile/')
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True,blank=True)


class Course(models.Model):
    course_id = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    credit=models.BigIntegerField()
    semester=models.CharField(max_length=255)
    syllabus=models.JSONField(blank=True,null=True)
    description = models.TextField(blank=True)
    date=models.DateTimeField(auto_now_add=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,null=True,blank=True)
    

class Announcement(models.Model):
    announcement_id = models.CharField(max_length=255,unique=True)
    description = models.CharField(max_length=255)
    link = models.URLField(max_length=255)
    date =  models.DateTimeField(auto_now=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,null=True,blank=True)
    

class Alert(models.Model):
    alert_id = models.CharField(max_length=255,unique=True,default="default_id")
    description = models.CharField(max_length=255)
    link = models.URLField(max_length=255,default="https://it.nitsri.ac.in/")
    date =  models.DateTimeField(auto_now=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,null=True,blank=True)



class Assignment(models.Model):
    assignment_id=models.CharField(max_length=255,unique=True)
    name = models.CharField(max_length=255)
    pdf = models.FileField(upload_to='assignments/')
    description = models.CharField(max_length=1000,null=True,blank=True)
    validity = models.CharField(max_length=255,null=True,blank=True)
    date=models.DateTimeField(auto_now_add=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True,blank=True)
    class Meta:
        ordering = ['name']
     
    def __str__(self):
        return f"{self.name}"
    
class Notes(models.Model):
    notes_id=models.CharField(max_length=255,unique=True)
    name = models.CharField(max_length=255)
    pdf = models.FileField(upload_to='notes/')
    description = models.CharField(max_length=255,null=True,blank=True)
    date=models.DateTimeField(auto_now_add=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True,blank=True)
    class Meta:
        ordering = ['name']
     
    def __str__(self):
        return f"{self.name}"

class Holiday(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField()
    description = models.TextField()
    
    def _str_(self):
        return self.name

