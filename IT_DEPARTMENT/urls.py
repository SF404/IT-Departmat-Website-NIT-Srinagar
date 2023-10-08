
from django.contrib.auth.decorators import login_required
from django.urls import path,include, re_path
from .views import *
from . import views
from django.views.generic import TemplateView
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# create a router object
router = routers.DefaultRouter()
router.register(r'temp',views.TeacherView, 'task')
router.register(r'courses',views.CourseView, 'task')
router.register(r'notesupload', views.NotesUpload, basename='login')
router.register(r'assignmentupload', views.AssignmentUpload, basename='login')
router.register(r'shownotes', views.NotesShow, basename='login')
router.register(r'showassignment', views.AssignmentShow, basename='login')



urlpatterns = [
    path('api/', include(router.urls)),
    path('api/auth/register/', RegistrationView.as_view(), name='registration'),
    path('api/auth/login/', CustomObtainTokenView.as_view(), name='login'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/refresh-token/', CustomRefreshTokenView.as_view(), name='refresh-token'),
    path('api/auth/logout/', LogoutView.as_view(), name='logout'),
    re_path('', TemplateView.as_view(template_name='index.html')),

    # path('', views.home, name="Home"),
    # path('home/', views.home, name="Home"),
    # path('login/', views.loginUser, name="login"),
    # path('signup/', views.signupUser, name="signup"),
    # path('dashboard/', include('Admin_Panel.urls'), name="dashboard"),
]


# "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoic2xpZGluZyIsImV4cCI6MTY5OTM3MTcxMSwiaWF0IjoxNjk2Nzc5NzExLCJqdGkiOiJjZmQ1OWZjNDE5YTE0ODI0ODM1YmU1OGM5ZWYxOGYyYiIsInJlZnJlc2hfZXhwIjoxNjk2ODY2MTExLCJ1c2VyX2lkIjoxfQ.3UHPVO0kNDS_3LK5nXBWAlZwaSoNSbLE_Vjf3ksp-EE"
