
from django.contrib.auth.decorators import login_required
from django.urls import path,include, re_path
from . import views
from django.views.generic import TemplateView
from rest_framework import routers

# create a router object
router = routers.DefaultRouter()
router.register(r'temp',views.TeacherView, 'task')
router.register(r'courses',views.CourseView, 'courses')
router.register(r'assignments',views.CourseView, 'assignments')
router.register(r'notes',views.CourseView, 'notes')



urlpatterns = [
    path('api/', include(router.urls)),
    re_path('', TemplateView.as_view(template_name='index.html')),
]
