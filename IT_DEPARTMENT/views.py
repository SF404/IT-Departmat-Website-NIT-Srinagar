from rest_framework import viewsets
from django.shortcuts import render,redirect
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from IT_DEPARTMENT.models import *
from django.http import JsonResponse
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


class TeacherView(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
 
    def get_queryset(self):
        sid = self.request.query_params.get('sid')
        queryset = Teacher.objects.filter(sid=sid)
        return queryset
    
class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
 
    def get_queryset(self):
        sid = self.request.query_params.get('sid')
        teacher = Teacher.objects.get(sid=sid)
        print("sid", teacher.name)
        queryset = Course.objects.filter(teacher=teacher)
        print(queryset[0].cid)
        return queryset


class NotesUpload(viewsets.ModelViewSet):
    serializer_class = NotesSerializer
    def create(self, request, *args, **kwargs):
        title = request.data.get("title")
        file = request.data.get("file")
        nid=random.randint(1, 10000)
        print(title)
        print(file)
        try:
            note = Notes(name=title, pdf=file,nid=nid)
            note.save()
            return Response({"message": "Notes created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class AssignmentUpload (viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    def create(self, request, *args, **kwargs):
        title = request.data.get("title")
        file = request.data.get("file")
        aid=random.randint(1, 10000)
        print(title)
        print(file)
        try:
            note = Assignment(name=title, pdf=file,aid=aid)
            note.save()
            return Response({"message": "Assignment created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        

class NotesShow(viewsets.ModelViewSet):
    serializer_class = NotesSerializer
    def get_queryset(self):
        notes = Notes.objects.all()
        return notes
    
class AssignmentShow(viewsets.ModelViewSet):
    serializer_class = AssignmentSerializer
    def get_queryset(self):
        assignment = Assignment.objects.all()
        return assignment
    




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
