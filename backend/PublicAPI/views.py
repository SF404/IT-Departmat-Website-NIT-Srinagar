from .serializers import *
from IT_DEPARTMENT.serializers import *
from IT_DEPARTMENT.models import *
from PublicAPI.models import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import status,viewsets
from rest_framework.response import Response
from django.http import FileResponse
import requests
from django.http import JsonResponse

# Create your views here.

class BaseFilteredViewSet(viewsets.ModelViewSet):
    def list(self, request, *args, **kwargs):
        email = self.request.query_params.get('email')
        
        if email:
            teacher = Teacher.objects.filter(email=email).first()
            
            if teacher:
                queryset = self.get_queryset().filter(teacher=teacher)
            else:
                queryset = self.get_queryset().none()
        else:
            queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ProjectView(BaseFilteredViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class PatentView(BaseFilteredViewSet):
    serializer_class = PatentSerializer
    queryset = Patent.objects.all()

class TeacherEducationView(BaseFilteredViewSet):
    serializer_class = TeacherEducationSerializer
    queryset = TeacherEducation.objects.all()

class ResearchView(BaseFilteredViewSet):
    serializer_class=ResearchSerializer
    queryset = Research.objects.all()

class AnnouncementView(BaseFilteredViewSet):
    serializer_class=AnnouncementSerializer
    queryset = Announcement.objects.all()

class TutorialsView(BaseFilteredViewSet):
    serializer_class=TutorialsSerializer
    queryset = Tutorials.objects.all()

class EventsView(BaseFilteredViewSet):
    serializer_class=EventsSerializer
    queryset = Events.objects.all()

class ProjectView(viewsets.ModelViewSet):
    serializer_class=ProjectSerializer
    def get_queryset(self):
        email=self.request.query_params.get('email')
        if email:
            teacher=Teacher.objects.filter(email=email).first()
            if teacher:
                queryset=Project.objects.filter(teacher=teacher)
                return queryset
        queryset = Project.objects.all()
        return queryset
    
class PatentView(viewsets.ModelViewSet):
    serializer_class=PatentSerializer
    def get_queryset(self):
        email=self.request.query_params.get('email')
        if email:
            teacher=Teacher.objects.filter(email=email).first()
            if teacher:
                queryset=Patent.objects.filter(teacher=teacher)
                return queryset
        queryset = Patent.objects.all()
        return queryset
    
class TeacherEducationView(viewsets.ModelViewSet):
    serializer_class=TeacherEducationSerializer
    def get_queryset(self):
        email=self.request.query_params.get('email')
        if email:
            teacher=Teacher.objects.filter(email=email).first()
            if teacher:
                queryset=TeacherEducation.objects.filter(teacher=teacher)
                return queryset
        queryset = TeacherEducation.objects.all()
        return queryset


class TeacherView(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    def get_queryset(self):
        id = self.request.query_params.get('Id')
        if id :
            teacher = Teacher.objects.filter(id=id)
            return teacher
        queryset = Teacher.objects.all()
        print("Number of items in queryset:", queryset.count())
        return queryset
    
class TeacherViewByMail(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    def get_queryset(self):
        email=self.request.query_params.get('email')
        print(email)
        if email :
            teacher = Teacher.objects.filter(email=email)
            return teacher


class PhdStudentView(viewsets.ModelViewSet):
    serializer_class = PhdStudentSerializer
    def get_queryset(self):
        queryset = Phd_Student.objects.all()
        print("Number of items in queryset:", queryset.count())
        return queryset
    

class allCourseGet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    def get_queryset(self):
        queryset = Course.objects.all()
        print("Number of items in queryset:", queryset.count())
        return queryset
    

class SemesterCourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    def get_queryset(self):
        semester_id = self.request.query_params.get('semesterId')
        semester = semester_id
        print(semester)
        queryset = Course.objects.filter(semester=semester)
        print("Number of items in queryset:", queryset.count())
        return queryset
    

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    def get_queryset(self):
        sid = self.request.query_params.get('sid')
        print(sid)
        teacher = Teacher.objects.get(teacher_id=sid)
        print("sid", teacher.name)
        queryset = Course.objects.filter(teacher=teacher)
        return queryset

class NotesShow(viewsets.ModelViewSet):
    serializer_class = NotesSerializer
    def get_queryset(self):
        cid = self.request.query_params.get('cid')
        course = Course.objects.get(course_id=cid)
        notes = Notes.objects.filter(course=course)
        return notes
class AssignmentShow(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    def get_queryset(self):
        cid = self.request.query_params.get('cid') 
        course = Course.objects.get(course_id=cid)       
        assignment = Assignment.objects.filter(course=course)
        return assignment
class DownloadAssignment(APIView):
    def post(self, request, *args, **kwargs):
        file_id = request.data.get("aid")
        my_model_instance = Assignment.objects.get(assignment_id=file_id)
        
        if not my_model_instance:
            return Response({"message": "Assignment not found."}, status=status.HTTP_404_NOT_FOUND)
        file_path = my_model_instance.pdf.path
        return FileResponse(open(file_path, 'rb'), as_attachment=True)
class DownloadNotes(APIView):
    def post(self, request, *args, **kwargs):
        file_id = request.data.get("nid")
        my_model_instance = Notes.objects.get(notes_id=file_id)
        
        if not my_model_instance:
            return Response({"message": "Note not found."}, status=status.HTTP_404_NOT_FOUND)
        
        file_path = my_model_instance.pdf.path
        return FileResponse(open(file_path, 'rb'), as_attachment=True) 

class GalleryView(APIView):
    serializer_class = GallerySerializer
    def get(self, request):
        queryset = Gallery.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class FileShow(viewsets.ModelViewSet):
    serializer_class = FileSerializer
    def get_queryset(self):       
        name = self.request.query_params.get('name')
        type = self.request.query_params.get('type')

        if type:
            return File.objects.filter(type=type)
        else:
            return File.objects.filter(name=name)
