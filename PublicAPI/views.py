from .serializers import *
from IT_DEPARTMENT.models import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import status,viewsets
from rest_framework.response import Response
from django.http import FileResponse
import requests
from django.http import JsonResponse

# Create your views here.


class TeacherView(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    def get_queryset(self):
        queryset = Teacher.objects.all()
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


