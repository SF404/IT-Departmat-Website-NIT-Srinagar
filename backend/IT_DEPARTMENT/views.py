from IT_DEPARTMENT.models import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework import status,viewsets
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.response import Response
from .serializers import *
from PublicAPI.serializers import *
from django.contrib.auth import authenticate
import random
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
import requests
from bs4 import BeautifulSoup
from django.http import FileResponse
from django.conf import settings
import os
from django.views.generic import TemplateView
import json


class GalleryUpload(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, format=None):
        gallery = GallerySerializer(data=request.data,many=True)
        if gallery.is_valid():
            gallery.save()
            return Response(gallery.data, status=status.HTTP_201_CREATED)
        return Response(gallery.errors, status=status.HTTP_400_BAD_REQUEST)

class PostPublicData(viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    def create(self, request, *args, **kwargs):
        email = request.query_params.get('email', None)
        object_type = request.query_params.get('type', None)
        if not email :
            return Response({"message": "email cannot be null"}, status=status.HTTP_400_BAD_REQUEST)
        if not object_type:
            return Response({"message": "type cannot be null"}, status=status.HTTP_400_BAD_REQUEST)
        teacher =Teacher.objects.filter(email=email).first()
        if not teacher:
            return Response({"message":"teacher cannot found"},status=status.HTTP_400_BAD_REQUEST)
        
        description=request.data.get("description")
        link=request.data.get('link')
        id = random.randint(1, 10000)
        if object_type == 'announcement':
            announcement=Announcement(announcement_id=id,description=description,link=link,teacher=teacher)
            announcement.save()
            return Response({"message": "Announcement Created Successfully"}, status=status.HTTP_201_CREATED)
        elif object_type == 'event':
            title=request.data.get("title")
            location=request.data.get("location")
            date =  request.data.get("date")
            event=Events(title=title,location=location,date=date ,description=description,link=link,teacher=teacher)
            event.save()
            return Response({"message": "Event Created Successfully"}, status=status.HTTP_201_CREATED)
        elif object_type == 'tutorial':
            title=request.data.get("title")
            Gallery=request.data.get("Gallerys")
            tags=request.data.get("tags")
            tutorial=Tutorials(title=title,Gallery=Gallery,tags=tags ,description=description,link=link,teacher=teacher)
            tutorial.save()
            return Response({"message": "Event Created Successfully"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "cannot find the type"}, status=status.HTTP_400_BAD_REQUEST)
        

class ProfileUpdate(viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    serializer_class = TeacherUpdateSerializer
    def update(self, request, pk):
        email = request.query_params.get('email', None)
        if not email:
            return Response({"message": "Email cannot be null"}, status=status.HTTP_400_BAD_REQUEST)
        # Try to get the teacher by email
        try:
            teacher = Teacher.objects.get(pk=pk,email=email)
        except Teacher.DoesNotExist:
            return Response({"message": "Teacher not found"}, status=status.HTTP_404_NOT_FOUND)
        # Update the teacher object
        phone = request.data.get('phone')
        research_field = request.data.get('research_field')
        profile_photo = request.data.get('profile_photo')
        about = request.data.get('about')
        if phone is not None:
            teacher.phone = phone

        if research_field is not None:
            teacher.research_field = research_field

        if profile_photo is not None:
            teacher.profile_photo = profile_photo

        if about is not None:
            teacher.about = about

        teacher.save()
        research_title = request.data.get('research_title', None)
        research_date = request.data.get('research_date', None)
        if research_title and research_date:
            research, created = Research.objects.get_or_create(
                teacher=teacher,
                title=research_title,
                defaults={'authors': request.data.get('research_authors', None), 'url': request.data.get('research_url', None)}
            )
            if not created:
                research.date = research_date
                research.save()
        patent_patent = request.data.get('patent_patent', None)
        patent_date = request.data.get('patent_date', None)
        patent_number = request.data.get('patent_number', None)
        if patent_patent and patent_date and patent_number:
            patent, created = Patent.objects.get_or_create(
                teacher=teacher,
                patent=patent_patent,
                defaults={'date': patent_date, 'number': patent_number}
            )
            if not created:
                patent.date = patent_date
                patent.number = patent_number
                patent.save()
        project_title = request.data.get('project_title', None)
        project_link = request.data.get('project_link', None)
        if project_title and project_link:
            project, created = Project.objects.get_or_create(
                teacher=teacher,
                title=project_title,
                defaults={'link': project_link}
            )
            if not created:
                project.link = project_link
                project.save()
        education_degree = request.data.get('education_degree', None)
        education_college = request.data.get('education_college', None)
        education_year = request.data.get('education_year', None)
        if education_degree and education_college and education_year:
            education, created = TeacherEducation.objects.get_or_create(
                teacher=teacher,
                degree=education_degree,
                college=education_college,
                year=education_year
            )
            if not created:
                education.year = education_year
                education.save()
        return Response({"message": "All necessary Teacher data has been updated or created"}, status=status.HTTP_200_OK)


class MailTeacherList(APIView):
    def get(self, request):
        teachers = Teacher.objects.all()
        serializer = TeacherMails(teachers, many=True)
        return Response(serializer.data)
    

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
        

class FileUpload (viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    serializer_class = FileSerializer
    def create(self, request, *args, **kwargs):
        title = request.data.get("title")
        file = request.FILES.get("file")
        type = request.data.get("type")
        try:
            file = File(name=title, file=file, type=type)
            file.save()
            return Response({"message": "Assignment created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        

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
        password = request.data.get('password')
        username=request.data.get('username')
        name = request.data.get('name')
        email = request.data.get('email')
        print(password)
        if not username or not password:
            return Response({'message': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({'message': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password,is_active=True)
        user.name = name
        user.save()
        return Response({'message': 'User created but not Verified.'}, status=status.HTTP_201_CREATED)

class CustomObtainTokenView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        print(password)
        if not username or not password:
            return Response({'message': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(username=username, password=password)
        if user is None:
            return Response({'message': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
        login(request, user)
        refresh = RefreshToken.for_user(user)
        access = str(refresh.access_token)
        return Response({'access_token': access,'refresh_token': str(refresh),'message': 'Logging in'}, status=status.HTTP_200_OK)
    

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
        
class HolidayView(viewsets.ModelViewSet):
    serializer_class = HolidaySerializer
    def get_queryset(self):
        month = self.request.query_params.get('activeMonth')
        print(month)
        
        queryset = Holiday.objects.filter(date__month=month)

        return queryset
    
class GetUserFromTokenView(APIView):
    # authentication_classes=[JWTAuthentication]
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        refresh_token = request.query_params.get('refresh_token')
        access_token = request.query_params.get('access_token')
        print(refresh_token,access_token)
        if not refresh_token or not access_token:
            return Response({'error': 'Token cannout found'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            refresh_token = RefreshToken(refresh_token)
            access_token = refresh_token.access_token
            user_id = access_token['user_id']
            user = User.objects.get(id=user_id)
            if not user :
                return Response({'error': 'User not found token Exists.'}, status=status.HTTP_401_UNAUTHORIZED)
            auth_email=user.email
            auth_name=user.first_name
            print(auth_email,auth_name)
            if not auth_email or not auth_name:
                return Response({'error': 'User not found token Exists.'}, status=status.HTTP_401_UNAUTHORIZED)
            teacher=Teacher.objects.filter(email=auth_email)
            if not teacher:
                return Response({'error': 'Data not exists in Teacher Table'}, status=status.HTTP_401_UNAUTHORIZED)
            serializer = TeacherSerializer(teacher, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({'error': 'Invalid token or token has expired.'}, status=status.HTTP_401_UNAUTHORIZED)

class GetEvents(APIView):
     def get(self, request, *args, **kwargs):

        print("hello")
        if request.method == "GET":
            url = 'https://nitsri.ac.in/'
            user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.1000.0 Safari/537.36'
            headers = {
                'User-Agent': user_agent,
                'Accept-Language': 'en-US,en;q=0.5',
            }
            req = requests.get(url=url)
            web_s = req.text
            soup = BeautifulSoup(web_s, "html.parser")
            event_container = soup.find(class_="gdlr-core-event-item-holder clearfix")
            events_data = []
            event_items = event_container.find_all(class_="gdlr-core-event-item-list gdlr-core-style-widget gdlr-core-item-pdlr clearfix")
            for event_item in event_items:
                event_data = {
                    "date": event_item.find(class_="gdlr-core-date").text.strip(),
                    "month": event_item.find(class_="gdlr-core-month").text.strip(),
                    "title": event_item.find(class_="gdlr-core-event-item-title").a.text.strip(),
                    "url": event_item.find(class_="gdlr-core-event-item-title").a.get('href'),
                    "time": "",
                    "location": "",
                }
                time_location = event_item.find_all(class_="gdlr-core-tail")
                event_data["time"]=time_location[0].text.strip()
                event_data["location"]=time_location[1].text.strip()
                events_data.append(event_data)
            if(events_data):
                return Response(events_data)
            return Response({"data":"not found"})
        

class GetNews(APIView):
     def get(self, request, *args, **kwargs):
        if request.method == "GET":
            url = 'https://www.instagram.com/nitsriofficial/?__a=1&__d=dis'
            user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.1000.0 Safari/537.36'
            headers = {
                'User-Agent': user_agent,
                'Accept-Language': 'en-US,en;q=0.5',
            }
            req = requests.get(url=url, headers=headers)
            web_s = req.text
            data = json.loads(web_s)
            news_data = data["graphql"]["user"]["edge_owner_to_timeline_media"]["edges"]
            return Response(news_data)
        return Response({"data":"not found"})