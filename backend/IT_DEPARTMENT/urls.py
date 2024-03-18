
from django.contrib.auth.decorators import login_required
from django.urls import path,include, re_path
from PublicAPI.views import *
from .views import *
from django.views.generic import TemplateView
from rest_framework import routers
from django.conf import settings



# api/events_data/ and api/news_data/ are combined to api/events/
# api/(assignment and notes)download/are merged to api/filedownload/
# api/filesdelete/ query changet from data to param
# notesupload and assignmentupload are combined to UploadFile and type and cource_id is in param instead of data
# same a notes and assignment show to public/showfiles
# getmails/,public/getteacher,public/getteacherbymail public/getphdstudent and are combined to public/getteacherstudent with type = teacher, phdstudent , list follows email or id
# semester, public/courseget, courses' are combined to public/courses followed but sid=email or semesterid = id
# researchget,projectget,teachereducationget,announcementget,tutorialsget,eventsget are combined to public/teacherdataview'

# create a router object
router = routers.DefaultRouter()
router.register(r'public/courses',CourseView, 'task')
router.register(r'uploadfiles', UploadFiles, basename='login')
router.register(r'public/showfiles', ShowFiles, basename='login')
router.register(r'listholidays', HolidayView, basename='Holiday Data')
router.register(r'public/getteacherstudent', TeacherStudentView, basename='Semester Data')
router.register(r'public/teacherdataview', TeacherDataView, basename='Semester Data')
router.register(r'public/fileget', FileShow, basename='Semester Data')
router.register(r'postpublicdata', PostPublicData, basename='Semester Data')
router.register(r'profileupdate', ProfileUpdate, basename='Semester Data')
router.register(r'delete', DataDelete, basename='Semester Data')
router.register(r'public/fileget', FileShow, basename='Semester Data')



urlpatterns = [
    path('api/', include(router.urls)),
    path('api/public/galleryget/',GalleryView.as_view()),
    path('api/updategallery/',GalleryUpload.as_view()),
    path('api/filedownload/', DownloadFile.as_view(),name='registration'),
    path('api/filesdelete/', DeleteFilesAPIView.as_view(),name='registration'),
    path('api/check/', CheckAuthenticationAPIView.as_view(), name='check_authentication'),
    path('api/logout/', LogoutAPIView.as_view(), name='check_authentication'),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/public/events/', GetData.as_view(),name='registration'),
]


