
from django.contrib.auth.decorators import login_required
from django.urls import path
from . import views
from IT_DEPARTMENT.views import dashboard

urlpatterns = [
    path('', views.index, name="Home"),
    path('login', views.loginUser, name="login"),
    path('signup', views.signupUser, name="signup"),
    path("dashboard",views.dashboard,name= "dashboard")
]
