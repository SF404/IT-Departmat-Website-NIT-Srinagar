from django.contrib import admin
from .models import Teacher,Course, Announcement, Alert,Assignment,Notes

# Register your models here.
admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(Announcement)
admin.site.register(Alert)
admin.site.register(Assignment)
admin.site.register(Notes)
