
from django.contrib.auth.decorators import login_required
from django.urls import path,include, re_path
from PublicAPI.views import *
from .views import *
from django.views.generic import TemplateView
from rest_framework import routers
from django.conf import settings



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
router.register(r'public/getteacherbymail', TeacherViewByMail, basename='Semester Data')
router.register(r'public/getphdstudent', PhdStudentView, basename='Semester Data')
router.register(r'public/courseget', allCourseGet, basename='Semester Data')
router.register(r'public/researchget', ResearchView, basename='Semester Data')
router.register(r'public/patentget', PatentView, basename='Semester Data')
router.register(r'public/projectget', ProjectView, basename='Semester Data')
router.register(r'public/teachereducationget', TeacherEducationView, basename='Semester Data')
router.register(r'public/announcementget', AnnouncementView, basename='Semester Data')
router.register(r'public/tutorialsget', TutorialsView, basename='Semester Data')
router.register(r'public/eventsget', EventsView, basename='Semester Data')
router.register(r'postpublicdata', PostPublicData, basename='Semester Data')
router.register(r'profileupdate', ProfileUpdate, basename='Semester Data')
router.register(r'delete', DataDelete, basename='Semester Data')
router.register(r'public/fileget', FileShow, basename='Semester Data')



urlpatterns = [
    path('api/', include(router.urls)),
    path('api/public/galleryget/',GalleryView.as_view()),
    path('api/updategallery/',GalleryUpload.as_view()),
    path('api/assignmentdownload/', DownloadAssignment.as_view(),name='registration'),
    path('api/notesdownload/', DownloadNotes.as_view(),name='registration'),
    path('api/getmails/', MailTeacherList.as_view(),name='registration'),
    path('api/filesdelete/', DeleteFilesAPIView.as_view(),name='registration'),
    # path('api/auth/register/', RegistrationView.as_view(), name='registration'),
    # path('api/auth/login/', CustomObtainTokenView.as_view(), name='login'),
    # path('api/auth/refresh-token/', CustomRefreshTokenView.as_view(), name='refresh-token'),
    # path('api/auth/logout/', LogoutView.as_view(), name='logout'),
    # path('api/auth/getuser/', GetUserFromTokenView.as_view(), name='logout'),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/events_data/', GetEvents.as_view(),name='registration'),
    path('api/news_data/', GetNews.as_view(),name='registration'),
    re_path(r'^$', TemplateView.as_view(template_name='index.html')),
    path('activate/<str:uid>/<str:token>/', TemplateView.as_view(template_name='activate_site.html'), name='activate'),
]


