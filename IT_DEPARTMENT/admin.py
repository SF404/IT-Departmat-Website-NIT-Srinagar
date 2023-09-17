from django.contrib import admin
from .models import Teacher,Course,Assignment

# Register your models here.
admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(Assignment)