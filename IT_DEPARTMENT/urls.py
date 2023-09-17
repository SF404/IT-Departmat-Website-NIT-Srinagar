
from django.contrib.auth.decorators import login_required
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name="Home"),
    path('home/', views.home, name="Home"),
    path('login/', views.loginUser, name="login"),
    path('signup/', views.signupUser, name="signup"),
    path('dashboard/', include('Admin_Panel.urls'), name="dashboard"),
]
