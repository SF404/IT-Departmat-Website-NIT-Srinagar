from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

# Create your models here.

# edits by Rajes:
    # teacher_id removed
    # rename date -> auto_date in every auto_now_add=True
    # rename patent -> title in Patent table
    # rename link -> url in Project Announcement Events Tutorial
    # rename pdf -> file in Assignment Notes
    # remove notes_id and assignment_id announcement_id




class Teacher(models.Model):
    name=models.CharField(max_length=255) 
    email=models.EmailField(max_length=255,unique=True)
    description=models.CharField(max_length=255,blank=True)
    phone=models.BigIntegerField(blank=True,null=True)
    research_field=models.CharField(max_length=500,blank=True)
    profile_photo=models.ImageField(upload_to='teacher_profile/')
    about=models.TextField(max_length=1000,blank=True,null=True)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True) 
    auto_date=models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering=['id'] 
    def __str__(self):
        return f"{self.name}"


class Research(models.Model):
    title=models.CharField(max_length=255)
    authors=models.TextField()
    url=models.URLField(blank=True,null=True)
    date=models.CharField(max_length=255)
    auto_date=models.DateTimeField(auto_now_add=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.SET_NULL,null=True,blank=True) 
    class Meta:
        ordering=['date']
    def __str__(self):
        return f"{self.title}"



class Patent(models.Model):
    title=models.CharField(max_length=255)
    date=models.CharField(max_length=255)
    number=models.BigIntegerField(unique=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.SET_NULL,null=True)

class Project(models.Model):
    title=models.CharField(max_length=255)
    url=models.URLField( blank=True,null=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.SET_NULL,null=True)
    

class TeacherEducation(models.Model):
    degree=models.CharField(max_length=255)
    college=models.CharField(max_length=255)
    year=models.CharField(max_length=255)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    class Meta:
        ordering=['year']   
    def __str__(self):
        return f"{self.degree}"

class Course(models.Model):
    course_id=models.CharField(max_length=255,unique=True)
    name=models.CharField(max_length=255)
    credit=models.BigIntegerField()
    semester=models.CharField(max_length=255)
    syllabus=models.TextField(blank=True,null=True)
    description=models.TextField(blank=True,null=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.SET_NULL,null=True,blank=True)
    auto_date=models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering=['semester']   
    def __str__(self):
        return f"{self.name}"
    

class Phd_Student(models.Model):
    name=models.CharField(max_length=255)
    email=models.EmailField(unique=True)
    enroll=models.TextField(max_length=255,blank=True)
    description=models.CharField(max_length=255,blank=True)
    research_field=models.TextField(max_length=255,blank=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    alumni=models.BooleanField(default=False)
    profile_photo=models.ImageField(upload_to='phd_student/')
    teacher=models.ForeignKey(Teacher,on_delete=models.SET_NULL,blank=True,null=True)  
    def __str__(self):
        return f"{self.name}"

class Announcement(models.Model):
    description=models.CharField(max_length=255)
    url=models.URLField(max_length=255,blank=True,null=True)
    auto_date=models.DateTimeField(auto_now=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True,blank=True)
    

class Events(models.Model):
    title=models.CharField(max_length=255)
    description=models.CharField(max_length=255,blank=True,null=True)
    url=models.URLField(max_length=255,blank=True,null=True)
    location=models.CharField(max_length=255,blank=True,null=True)
    date=models.DateField()
    auto_date=models.DateTimeField(auto_now_add=True)
    image=models.ImageField(upload_to='events/',blank=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True,blank=True)

class Tutorials(models.Model):
    title=models.CharField(max_length=255)
    description=models.CharField(max_length=255,blank=True,null=True)
    url=models.URLField(max_length=255,default="https://nitsri.ac.in/")
    image=models.ImageField(upload_to='tutorials/',blank=True,default="temp")
    SELECTION_CHOICES=(
        ('video','Video'),
        ('blog','Blog'),
        ('other','Other'),
    )
    selection=models.CharField(
        max_length=10,
        choices=SELECTION_CHOICES,blank=True,default='other'
    )
    tags=models.CharField(max_length=255,blank=True,null=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.SET_NULL,null=True,blank=True)


class Assignment(models.Model):
    name=models.CharField(max_length=255)
    file=models.FileField(upload_to='assignments/')
    description=models.CharField(max_length=1000,null=True,blank=True)
    validity=models.CharField(max_length=255,null=True,blank=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True,blank=True)
    class Meta:
        ordering=['name']   
    def __str__(self):
        return f"{self.name}"
    
class Notes(models.Model):
    name=models.CharField(max_length=255)
    file=models.FileField(upload_to='notes/')
    description=models.CharField(max_length=255,null=True,blank=True)
    auto_date=models.DateTimeField(auto_now_add=True)
    course=models.ForeignKey(Course,on_delete=models.CASCADE,null=True,blank=True)
    class Meta:
        ordering=['name'] 
    def __str__(self):
        return f"{self.name}"


