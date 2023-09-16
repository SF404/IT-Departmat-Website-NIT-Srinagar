from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="Home"),
    path('login', views.loginUser, name="login"),
    path('signup', views.signup, name="signup"),
    path('dashboard', views.dashboard, name="dashboard"),
]
