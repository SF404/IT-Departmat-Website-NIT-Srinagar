from django.db import models

# Create your models here.
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

class Announcement(models.Model):
    aid = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    date =  models.DateTimeField(auto_now=True)

class Alert(models.Model):
    aid = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    valid = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

class Assignment(models.Model):
    aid=models.CharField(max_length=255,unique=True)
    name = models.CharField(max_length=255)
    pdf = models.FileField(upload_to='assignments/')
    description = models.CharField(max_length=255,null=True,blank=True)
    deadline = models.CharField(max_length=255,null=True,blank=True)
    cid = models.CharField(max_length=255,null=True)
    date=models.DateTimeField(auto_now_add=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True,blank=True)
    class Meta:
        ordering = ['name']
     
    def __str__(self):
        return f"{self.name}"
    
class Notes(models.Model):
    nid=models.CharField(max_length=255,unique=True)
    name = models.CharField(max_length=255)
    pdf = models.FileField(upload_to='notes/')
    description = models.CharField(max_length=255,null=True,blank=True)
    cid = models.CharField(max_length=255,null=True)
    date=models.DateTimeField(auto_now_add=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True,blank=True)
    class Meta:
        ordering = ['name']
     
    def __str__(self):
        return f"{self.name}"

