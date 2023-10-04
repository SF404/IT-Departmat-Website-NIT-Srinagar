
from django.contrib.auth.decorators import login_required
from django.urls import path,include, re_path
from . import views
from django.views.generic import TemplateView
from rest_framework import routers

# create a router object
router = routers.DefaultRouter()
router.register(r'temp',views.TeacherView, 'task')
router.register(r'courses',views.CourseView, 'task')



urlpatterns = [
    path('api/', include(router.urls)),
    re_path('', TemplateView.as_view(template_name='index.html')),
    # path('api/temp', views.temporary, name="test")

    # path('', views.home, name="Home"),
    # path('home/', views.home, name="Home"),
    # path('login/', views.loginUser, name="login"),
    # path('signup/', views.signupUser, name="signup"),
    # path('dashboard/', include('Admin_Panel.urls'), name="dashboard"),
]
