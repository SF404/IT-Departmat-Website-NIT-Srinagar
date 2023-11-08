from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Create your models here.


class Teacher(models.Model):
    teacher_id = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    description = models.CharField(max_length=255,blank=True)
    phone =models.BigIntegerField(  blank=True, null=True)
    research_field = models.TextField(max_length=255,blank=True)
    date=models.DateTimeField(auto_now_add=True)
    profile_photo = models.ImageField(upload_to='teacher_profile/')
    about = models.JSONField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True,blank=True)


class Research(models.Model):
    title = models.CharField(max_length=255)
    authors = models.TextField()
    url = models.URLField(blank=True,null=True)
    date = models.CharField(max_length=255)
    auto_date=models.DateTimeField(auto_now_add=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,null=True,blank=True)



class Patent(models.Model):
    patent=models.CharField(max_length=255)
    date=models.CharField(max_length=255)
    number=models.BigIntegerField(unique=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

class Project(models.Model):
    title=models.CharField(max_length=255)
    link=models.URLField( blank=True,null=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    

class TeacherEducation(models.Model):
    degree=models.CharField(max_length=255)
    college=models.CharField(max_length=255)
    Year= models.BigIntegerField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

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
    link = models.URLField(max_length=255,blank=True,null=True)
    date =  models.DateTimeField(auto_now=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    

class Events(models.Model):
    title=models.CharField(max_length=255)
    description = models.CharField(max_length=255,blank=True,null=True)
    link = models.URLField(max_length=255,blank=True,null=True)
    location=models.CharField(max_length=255,blank=True,null=True)
    date =  models.DateField()
    auto_date =  models.DateTimeField(auto_now=True)
    # image = models.ImageField(upload_to='tutorials/', null=True, blank=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

class Tutorials(models.Model):
    title=models.CharField(max_length=255)
    description = models.CharField(max_length=255,blank=True,null=True)
    link = models.URLField(max_length=255,blank=True,null=True)
    image = models.ImageField(upload_to='tutorials/')
    SELECTION_CHOICES = (
        ('option1', 'Video'),
        ('option2', 'Blog'),
        ('option3', 'Other'),
    )
    selection = models.CharField(
        max_length=10,
        choices=SELECTION_CHOICES,blank=True
    )
    tags=models.CharField(max_length=255,blank=True,null=True)
    auto_date =  models.DateTimeField(auto_now=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)





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
    

