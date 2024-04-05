from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from users.permissions import IsAdminOrReadOnly, IsFacultyOrReadOnly
from .permissions import IsInstructorOfCourse
from rest_framework import generics
from .models import Education, Research, Project, Course, StudyMaterial, Announcement, CollegeEvent, Alumni, BtechStudent,PhdScholar, Gallery, Image, SiteFile
from .serializers import FacultySerializer, EducationSerializer, ResearchSerializer, ProjectSerializer, CourseSerializer, StudyMaterialSerializer, CollegeEventSerializer, AnnouncementSerializer, AlumniSerializer, BtechStudentSerializer, PhdScholarSerializer, GallerySerializer, ImageSerializer, SiteFileSerializer
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404

class FacultyRetriveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = FacultySerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.faculty

class EducationListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = EducationSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(faculty_id=self.request.user.faculty)

    def get_queryset(self):
        return Education.objects.filter(faculty_id=self.request.user.faculty)

class EducationRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EducationSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Education.objects.filter(faculty_id=self.request.user.faculty)

class ResearchListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ResearchSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(faculty_id=self.request.user.faculty)

    def get_queryset(self):
        return Research.objects.filter(faculty_id=self.request.user.faculty)

class ResearchRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ResearchSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Research.objects.filter(faculty_id=self.request.user.faculty)

class ProjectListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(faculty_id=self.request.user.faculty)

    def get_queryset(self):
        return Project.objects.filter(faculty_id=self.request.user.faculty)

class ProjectRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Project.objects.filter(faculty_id=self.request.user.faculty)


# ----------------- Course Views -----------------------#


class CourseCreateAPIView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly] 


class BulkCourseCreateAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

    def post(self, request):
        course_data = request.data
        if not isinstance(course_data, list):
            return Response({"error": "Expecting a list of courses"}, status=status.HTTP_400_BAD_REQUEST)

        created_courses = []

        for data in course_data:
            course_id = data.get('course_id')
            if course_id:
                 try:
                    course_instance = Course.objects.get(course_id=course_id)
                    serializer = CourseSerializer(course_instance, data=data)
                 except Course.DoesNotExist:
                    serializer = CourseSerializer(data=data)
            else:
                serializer = CourseSerializer(data=data)
                
            if serializer.is_valid():
                course = serializer.save()
                created_courses.append(course)
            else:
                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(CourseSerializer(created_courses, many=True).data, status=status.HTTP_200_OK)

class CourseRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly] 

class AssignInstructorToCourseAPIView(generics.UpdateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly] 

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        faculty_id = request.data.get('faculty_id', None)
        clear_data = request.data.get('clear_data', False)
        print(clear_data)

        if faculty_id is None:
            return Response({"detail": "Faculty ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            faculty_id = int(faculty_id)
        except ValueError:
            return Response({"detail": "Invalid faculty ID provided."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            if clear_data.lower() == 'true':
                instance.studymaterial_set.all().delete()
            
            instance.instructor_id = faculty_id
            instance.save()

            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class InstructorCourseListAPIView(generics.ListAPIView):
    serializer_class = CourseSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Course.objects.filter(instructor=user.faculty)

class CourseStudyMaterialListCreateAPIView(generics.ListCreateAPIView):
    queryset = StudyMaterial.objects.all()
    serializer_class = StudyMaterialSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsInstructorOfCourse]

    def get_queryset(self):
        queryset = super().get_queryset()
        course_id = self.kwargs.get('course_id')
        return queryset.filter(course_id=course_id)

    def perform_create(self, serializer):
        # Retrieve the Course instance using course_id
        course_id = self.kwargs.get('course_id')
        course = get_object_or_404(Course, pk=course_id)
        # Assign the Course instance to the study_material field
        serializer.save(course_id=course)

class CourseStudyMaterialRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudyMaterial.objects.all()
    serializer_class = StudyMaterialSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsInstructorOfCourse]

# ----------------------------------------------------------------------------


class AnnouncementListCreateAPIView(generics.ListCreateAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)

class AnnouncementRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

    def perform_update(self, serializer):
        serializer.save(user_id=self.request.user)

class CollegeEventListCreateAPIView(generics.ListCreateAPIView):
    queryset = CollegeEvent.objects.all()
    serializer_class = CollegeEventSerializer
    parser_classes = (MultiPartParser, FormParser)
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)

class CollegeEventRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CollegeEvent.objects.all()
    serializer_class = CollegeEventSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

    def perform_update(self, serializer):
        serializer.save(user_id=self.request.user)

# --------------------------------------------------------------------


class AlumniListCreateAPIView(generics.ListCreateAPIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data, list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

class BulkAlumniCreateAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

    def post(self, request):
        alumni_data = request.data
        if not isinstance(alumni_data, list):
            return Response({"error": "Expecting a list of Alumni"}, status=status.HTTP_400_BAD_REQUEST)
        created_alumni = []
        for data in alumni_data:
            serializer = AlumniSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            alumni = serializer.save()
            created_alumni.append(alumni)

        return Response(AlumniSerializer(created_alumni, many=True).data, status=status.HTTP_200_OK)


class AlumniRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

class BtechStudentListCreateAPIView(generics.ListCreateAPIView):
    queryset = BtechStudent.objects.all()
    serializer_class = BtechStudentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data, list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

class BtechStudentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BtechStudent.objects.all()
    serializer_class = BtechStudentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

class BulkStudentCreateAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

    def post(self, request):
        student_data = request.data
        if not isinstance(student_data, list):
            return Response({"error": "Expecting a list of students"}, status=status.HTTP_400_BAD_REQUEST)

        created_students = []

        for data in student_data:
            enrollment_no = data.get('enrollment_no')
            if enrollment_no:
                try:
                    student_instance = BtechStudent.objects.get(enrollment_no=enrollment_no)
                    serializer = BtechStudentSerializer(student_instance, data=data)
                except BtechStudent.DoesNotExist:
                    serializer = BtechStudentSerializer(data=data)
            else:
                serializer = BtechStudentSerializer(data=data)
                
            if serializer.is_valid():
                student = serializer.save()
                created_students.append(student)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(BtechStudentSerializer(created_students, many=True).data, status=status.HTTP_200_OK)

class PhdScholarListCreateAPIView(generics.ListCreateAPIView):
    queryset = PhdScholar.objects.all()
    serializer_class = PhdScholarSerializer

class PhdScholarRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PhdScholar.objects.all()
    serializer_class = PhdScholarSerializer

# -----------------------------------------------------------------------

class GalleryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

class GalleryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

class ImageListCreateAPIView(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]  
    def perform_create(self, serializer):
        gallery_id = self.kwargs.get('gallery_id')
        serializer.save(gallery_id=gallery_id)

class ImageRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

# -------------------------------------------------------------------

class SiteFileListView(generics.ListCreateAPIView):
    serializer_class = SiteFileSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        category = self.request.query_params.get('category')
        if category:
            return SiteFile.objects.filter(category=category)
        return SiteFile.objects.all()

class SiteFileRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SiteFile.objects.all()
    serializer_class = SiteFileSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]

