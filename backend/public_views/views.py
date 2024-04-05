from rest_framework import generics, pagination
from rest_framework.response import Response
from it_academics.models import *
from .serializers import *

# ------------------------ Pagination ----------------------- #
class Pagination_20(pagination.PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 1000
# ----------------------------------------------------------- #

class CollegeEventListAPIView(generics.ListAPIView):
    queryset = CollegeEvent.objects.all()
    serializer_class = CollegeEventSerializer

class AnnouncementListAPIView(generics.ListAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

class FacultyListAPIView(generics.ListAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetailAPIView(generics.RetrieveAPIView):
    serializer_class = FacultyDetailSerializer
    queryset = Faculty.objects.all()

class DistinctBatchesAPIView(generics.ListAPIView):
    serializer_class = BtechStudentSerializer

    def get_queryset(self):
        return BtechStudent.objects.values_list('batch', flat=True).distinct()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        return Response(queryset)

class BtechStudentListAPIView(generics.ListAPIView):
    queryset = BtechStudent.objects.all()
    serializer_class = BtechStudentSerializer

    def get_queryset(self):
        batch = self.request.query_params.get('batch')
        queryset = BtechStudent.objects.all()
        if batch is not None:
            queryset = queryset.filter(batch=batch)
        return queryset

class PhdStudentListAPIView(generics.ListAPIView):
    queryset = PhdScholar.objects.all()
    serializer_class = PhdScholarSerializer
    pagination_class = Pagination_20


class AlumniListAPIView(generics.ListAPIView):
    queryset = Alumni.objects.all().order_by('-graduation_year')
    serializer_class = AlumniSerializer
 
class ResearchListAPIView(generics.ListAPIView):
    queryset = Research.objects.all()
    serializer_class = ResearchSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')
        
        if start_date and end_date:
            queryset = queryset.filter(research_date__range=[start_date, end_date])
        
        return queryset
    
class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')
        
        if start_date and end_date:
            queryset = queryset.filter(end_date__range=[start_date, end_date])
        
        return queryset

class CourseListAPIView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseListBySemesterAPIView(generics.ListAPIView):
    serializer_class = CourseSerializer

    def get_queryset(self):
        semester = self.kwargs['semester']
        return Course.objects.filter(semester=semester)
    
class CourseRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class StudyMaterialListByCourseAPIView(generics.ListAPIView):
    queryset = StudyMaterial.objects.all()
    serializer_class = StudyMaterialSerializer
    
class GalleryListAPIView(generics.ListAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryImagesListAPIView(generics.ListAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        gallery_id = self.kwargs['gallery_id']
        return Image.objects.filter(gallery_id=gallery_id)
    
class ImagesListAPIView(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    def get_queryset(self):
        count = self.request.query_params.get('count', 12)
        count = int(count)
        return Image.objects.order_by('-uploaded_at')[:count]

class SiteFileListView(generics.ListCreateAPIView):
    serializer_class = SiteFileSerializer

    def get_queryset(self):
        category = self.request.query_params.get('category')
        if category:
            return SiteFile.objects.filter(category=category)
        return SiteFile.objects.all()

