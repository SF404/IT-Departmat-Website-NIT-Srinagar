
from django.contrib.auth.decorators import login_required
from django.urls import path,include, re_path
from .views import *
from . import views
from django.views.generic import TemplateView
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
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
router.register(r'semester', SemesterCourseView, basename='Semester Data')
router.register(r'listholidays', HolidayView, basename='Holiday Data')



urlpatterns = [
    path('api/', include(router.urls)),
    path('api/assignmentdownload/', DownloadAssignment.as_view(),name='registration'),
    path('api/notesdownload/', DownloadNotes.as_view(),name='registration'),
    path('api/filesdelete/', DeleteFilesAPIView.as_view(),name='registration'),
    path('api/auth/register/', RegistrationView.as_view(), name='registration'),
    path('api/auth/login/', CustomObtainTokenView.as_view(), name='login'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/refresh-token/', CustomRefreshTokenView.as_view(), name='refresh-token'),
    path('api/auth/logout/', LogoutView.as_view(), name='logout'),
    re_path('', TemplateView.as_view(template_name='index.html')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
