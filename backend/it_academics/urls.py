from django.urls import path
from .views import *

urlpatterns = [
    # Faculty Profile
    path('faculty/profile/', FacultyRetriveUpdateAPIView.as_view(), name='faculty-profile'),

    # Education URLs
    path('faculty/education/', EducationListCreateAPIView.as_view(), name='education-list-create'),
    path('faculty/education/<int:pk>/', EducationRetrieveUpdateDestroyAPIView.as_view(), name='education-detail'),
    
    # Research URLs
    path('faculty/research/', ResearchListCreateAPIView.as_view(), name='research-list-create'),
    path('faculty/research/<int:pk>/', ResearchRetrieveUpdateDestroyAPIView.as_view(), name='research-detail'),
    
    # Project URLs
    path('faculty/project/', ProjectListCreateAPIView.as_view(), name='project-list-create'),
    path('faculty/project/<int:pk>/', ProjectRetrieveUpdateDestroyAPIView.as_view(), name='project-detail'),

    # Course URLs
    path('courses/create/', CourseCreateAPIView.as_view(), name='course-create'),
    path('courses/bulk-create/', BulkCourseCreateAPIView.as_view(), name='bulk_create_courses'),
    path('courses/<str:pk>/', CourseRetrieveUpdateDestroyAPIView.as_view(), name='course-retrieve-update-destroy'),
    path('assign_instructor/<str:pk>/', AssignInstructorToCourseAPIView.as_view(), name='assign_instructor_to_course'),
    path('faculty/courses/', InstructorCourseListAPIView.as_view(), name='course-create'),

    # Study Material URLs
    path('courses/<int:course_id>/studymaterials/', CourseStudyMaterialListCreateAPIView.as_view(), name='studymaterial-list-create'),
    path('courses/<int:course_id>/studymaterials/<int:pk>/', CourseStudyMaterialRetrieveUpdateDestroyAPIView.as_view(), name='studymaterial-retrieve-update-destroy'),

    # Announcement URLs
    path('announcements/', AnnouncementListCreateAPIView.as_view(), name='announcement-list-create'),
    path('announcements/<int:pk>/', AnnouncementRetrieveUpdateDestroyAPIView.as_view(), name='announcement-detail'),

    # College Events URLs
    path('college-events/', CollegeEventListCreateAPIView.as_view(), name='college-event-list-create'),
    path('college-events/<int:pk>/', CollegeEventRetrieveUpdateDestroyAPIView.as_view(), name='college-event-detail'),

    # Alumni URLs
    path('alumni/', AlumniListCreateAPIView.as_view(), name='alumni-list-create'),
    path('alumni/bulk-create/', BulkAlumniCreateAPIView.as_view(), name='alumni-list-bulk-create'),
    path('alumni/<int:pk>/', AlumniRetrieveUpdateDestroyAPIView.as_view(), name='alumni-retrieve-update-destroy'),

    # Btech Students URLs
    path('btechstudents/', BtechStudentListCreateAPIView.as_view(), name='btechstudent-list-create'),
    path('btechstudents/<str:pk>/', BtechStudentRetrieveUpdateDestroyAPIView.as_view(), name='btechstudent-retrieve-update-destroy'),
    path('btechstudents/bulk-create/', BulkStudentCreateAPIView.as_view(), name='bulk_create_btechstudents'),

    path('phd-scholars/', PhdScholarListCreateAPIView.as_view(), name='phd-scholar-list-create'),
    path('phd-scholars/<int:pk>/', PhdScholarRetrieveUpdateDestroyAPIView.as_view(), name='phd-scholar-retrieve-update-destroy'),

    # Gallery URLs
    path('galleries/', GalleryListCreateAPIView.as_view(), name='gallery-list-create'),
    path('galleries/<int:pk>/', GalleryRetrieveUpdateDestroyAPIView.as_view(), name='gallery-retrieve-update-destroy'),
    path('galleries/<int:gallery_id>/images/', ImageListCreateAPIView.as_view(), name='image-list-create-gallery'),


    # Image URLs
    path('images/', ImageListCreateAPIView.as_view(), name='image-list-create'),
    path('images/<int:pk>/', ImageRetrieveUpdateDestroyAPIView.as_view(), name='image-retrieve-update-destroy'),

    # SiteFiles URLs

    path('site-files/', SiteFileListView.as_view(), name='sitefile-list'),
    path('site-files/<int:pk>/', SiteFileRetrieveUpdateDestroyView.as_view(), name='sitefile-retrieve-update-destroy'),

]
