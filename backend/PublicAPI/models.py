from django.db import models

# Create your models here.
class File(models.Model):
    name=models.CharField(max_length=255, primary_key=True)
    file=models.FileField(upload_to='files/')
    type=models.CharField(max_length=255)
    auto_date=models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering=['name']   
    def __str__(self):
        return f"{self.name}"
    
class Gallery(models.Model):
    image=models.ImageField(upload_to='gallery/')
    auto_date=models.DateTimeField(auto_now_add=True)


class Holiday(models.Model):
    id=models.AutoField(primary_key=True)
    date=models.DateTimeField()
    description=models.TextField()
    def _str_(self):
        return self.name



