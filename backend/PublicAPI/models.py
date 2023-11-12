from django.db import models

# Create your models here.
class File(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='files/')
    type = models.CharField(max_length=255)
    date=models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['name']   
    def __str__(self):
        return f"{self.name}"
    
class Gallery(models.Model):
    image = models.ImageField(upload_to='gallery/')
    date = models.DateTimeField(auto_now_add=True)



