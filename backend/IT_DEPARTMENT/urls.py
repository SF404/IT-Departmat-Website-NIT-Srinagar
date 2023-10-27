
from django.contrib.auth.decorators import login_required
from django.urls import path,include, re_path
from PublicAPI.views import *
from .views import *
from . import views
from django.views.generic import TemplateView
from rest_framework import routers
from django.conf import settings

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# create a router object
router = routers.DefaultRouter()
router.register(r'courses',CourseView, 'task')
router.register(r'notesupload', NotesUpload, basename='login')
router.register(r'assignmentupload', AssignmentUpload, basename='login')
router.register(r'shownotes', NotesShow, basename='login')
router.register(r'showassignment', AssignmentShow, basename='login')
router.register(r'semester', SemesterCourseView, basename='Semester Data')
router.register(r'listholidays', HolidayView, basename='Holiday Data')
router.register(r'public/getteacher', TeacherView, basename='Semester Data')


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/assignmentdownload/', DownloadAssignment.as_view(),name='registration'),
    path('api/notesdownload/', DownloadNotes.as_view(),name='registration'),
    path('api/getmails/', MailTeacherList.as_view(),name='registration'),
    path('api/filesdelete/', DeleteFilesAPIView.as_view(),name='registration'),
    path('api/auth/register/', RegistrationView.as_view(), name='registration'),
    path('api/auth/login/', CustomObtainTokenView.as_view(), name='login'),
    path('api/auth/refresh-token/', CustomRefreshTokenView.as_view(), name='refresh-token'),
    path('api/auth/logout/', LogoutView.as_view(), name='logout'),
    path('api/auth/getuser/', GetUserFromTokenView.as_view(), name='logout'),
    path('api/events_data/', GetEvents.as_view(),name='registration'),
    path('api/news_data/', GetNews.as_view(),name='registration'),
    re_path('', TemplateView.as_view(template_name='index.html')),
]



