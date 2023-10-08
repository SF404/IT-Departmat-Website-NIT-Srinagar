
from django.urls import path,include, re_path
from . import views
from .views import *
from django.views.generic import TemplateView
from rest_framework import routers

# create a router object
router = routers.DefaultRouter()

router.register(r'login',views.LoginAPI.as_view(), 'login')



urlpatterns = [
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
    # path('auth/', include('djoser.social.urls')),
    path('login/', LoginAPI.as_view()),
]
