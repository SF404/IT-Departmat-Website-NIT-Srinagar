
from django.contrib.auth.decorators import login_required
from django.urls import path,include
from Admin_Panel import views

urlpatterns = [
    path("",views.dashboard,name= "dashboard")
]