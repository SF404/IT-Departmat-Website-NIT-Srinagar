from django.urls import path
from .views import *

urlpatterns = [
    path('college-events/', CollegeEventListAPIView.as_view(), name='college-event-list'),
    path('announcements/', AnnouncementListAPIView.as_view(), name='announcement-list'),
    path('faculty/', FacultyListAPIView.as_view(), name='faculty-list'),
    path('faculty/<int:pk>/', FacultyDetailAPIView.as_view(), name='faculty-detail'),
    path('btech-batches/', DistinctBatchesAPIView.as_view(), name='distinct-batches'),
    path('btech-students/', BtechStudentListAPIView.as_view(), name='btech-student-list'),
    path('phd-students/', PhdStudentListAPIView.as_view(), name='phd-student-list'),
    path('alumni/', AlumniListAPIView.as_view(), name='recently-graduated-alumni-list'),
    path('researches/', ResearchListAPIView.as_view(), name='research-list'),
    path('projects/', ProjectListAPIView.as_view(), name='research-list'),
    path('courses/', CourseListAPIView.as_view(), name='course-list'),
    path('courses/semester/<int:semester>/', CourseListBySemesterAPIView.as_view(), name='course-list-by-semester'),
    path('courses/<int:pk>/studymaterials/', StudyMaterialListByCourseAPIView.as_view(), name='studymaterial-list-by-course'),
    path('courses/<str:pk>/', CourseRetrieveAPIView.as_view(), name='studymaterial-list-by-course'),
    path('galleries/', GalleryListAPIView.as_view(), name='gallery-list'),
    path('galleries/<int:pk>/', GalleryRetrieveAPIView.as_view(), name='gallery-images-list'),
    path('images/', ImagesListAPIView.as_view(), name='list-images'),
    path('site-files/', SiteFileListView.as_view(), name='sitefile-list'),

]
