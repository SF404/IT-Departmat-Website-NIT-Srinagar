
from django.contrib.auth.decorators import login_required
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from IT_DEPARTMENT.views import dashboard,uploadfile

urlpatterns = [
    path('', views.index, name="Home"),
    path('login', views.loginUser, name="login"),
    path('upload',views.uploadfile,name="upload"),
    path('signup', views.signupUser, name="signup"),
    path("dashboard",views.dashboard,name= "dashboard"),
    path('download', views.downloadfile, name='downloadfile'),
]
