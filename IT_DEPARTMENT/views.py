from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser
from django.shortcuts import get_object_or_404
from django.shortcuts import HttpResponse
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from IT_DEPARTMENT.models import *
from django.http import JsonResponse,FileResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework import generics,status,response,viewsets
from .serializers import *
from django.contrib.sessions.models import Session
from rest_framework.response import Response
from django.contrib.auth import authenticate
import random
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
import os

class TeacherView(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    def get_queryset(self):
        sid = self.request.query_params.get('sid')
        queryset = Teacher.objects.filter(teacher_id=sid)
        return queryset
    
class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
 
    def get_queryset(self):
        sid = self.request.query_params.get('sid')
        teacher = Teacher.objects.get(teacher_id=sid)
        print("sid", teacher.name)
        queryset = Course.objects.filter(teacher=teacher)
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


class NotesUpload(viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    serializer_class = NotesSerializer
    def create(self, request, *args, **kwargs):
        title = request.data.get("title")
        uploaded_file = request.FILES.get("file")
        course_id=request.data.get("cid")
        course = Course.objects.get(course_id=course_id)
        nid = random.randint(1, 10000)
        if uploaded_file:
            try:
                note = Notes(name=title, pdf=uploaded_file, notes_id=nid,course=course)
                note.save()
                return Response({"message": "Notes created successfully"}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "No file uploaded"}, status=status.HTTP_400_BAD_REQUEST)


class AssignmentUpload (viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    serializer_class = AssignmentSerializer
    def create(self, request, *args, **kwargs):
        title = request.data.get("title")
        file = request.FILES.get("file")
        description = request.data.get("description")
        validity = request.data.get("validity")
        course_id=request.data.get("cid")
        course = Course.objects.get(course_id=course_id)
        aid=random.randint(1, 10000)
        try:
            note = Assignment(name=title, pdf=file, assignment_id=aid, description=description, validity=validity, course=course)
            note.save()
            return Response({"message": "Assignment created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        

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



class DeleteFilesAPIView(APIView):
    def post(self, request, *args, **kwargs):
        aid = request.data.get("assignment_id")
        nid = request.data.get("notes_id")
        print(aid)
        print(nid)
        if not aid and not nid:
            return Response({"message": "Either 'aid' or 'nid' is required"}, status=status.HTTP_400_BAD_REQUEST)
        if aid:
            try:
                assignment_entry = Assignment.objects.get(assignment_id=aid)
                assignment_entry.delete()
                return Response({"message": "Assignment entry deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except Assignment.DoesNotExist:
                return Response({"message": "Assignment entry not found"}, status=status.HTTP_404_NOT_FOUND)
        if nid:
            try:
                notes_entry = Notes.objects.get(notes_id=nid)
                notes_entry.delete()
                return Response({"message": "Notes entry deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except Notes.DoesNotExist:
                return Response({"message": "Notes entry not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"message": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)
    

class RegistrationView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        name = request.data.get('name')
        email = request.data.get('email')
        print(password)
        if not username or not password:
            return Response({'message': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({'message': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password,is_active=True)
        user.first_name = name
        user.email = email
        user.save()
        return Response({'message': 'User created but not Verified.'}, status=status.HTTP_201_CREATED)

class CustomObtainTokenView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        print(password)
        if not username or not password:
            return Response({'message': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(username=username, password=password)
        if user is None:
            return Response({'message': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
        # if not user.is_active:
        #     return Response({'message': 'User is not Verified.'}, status=status.HTTP_403_FORBIDDEN)
        login(request, user)
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        return Response({'access_token': access_token,'refresh_token': str(refresh),'message': 'Logging in'}, status=status.HTTP_200_OK)

class CustomRefreshTokenView(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        refresh = RefreshToken(request.data.get('refresh_token'))
        access_token = str(refresh.access_token)
        return Response({'access_token': access_token,'refresh_token': str(refresh)}, status=status.HTTP_200_OK)

class LogoutView(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully.'}, status=status.HTTP_200_OK)
