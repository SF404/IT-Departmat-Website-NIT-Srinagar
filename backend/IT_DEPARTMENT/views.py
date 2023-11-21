from IT_DEPARTMENT.models import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework import status,viewsets
from rest_framework.response import Response
from .serializers import *
from PublicAPI.serializers import *
import random
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.conf import settings
from django.db import DatabaseError


class DataDelete(viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    def destroy(self, request, *args, **kwargs):
        try:
            obj_type = request.query_params.get('type')
            
            if obj_type == 'announcement':
                obj = Announcement.objects.get(pk=kwargs['pk'])
                serializer = AnnouncementSerializer(obj)
                obj.delete()
                return Response({'message': 'Announcement Data deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            elif obj_type == 'tutorial':
                obj = Tutorials.objects.get(pk=kwargs['pk'])
                serializer = TutorialsSerializer(obj)
                obj.delete()
                return Response({'message': 'Tutorial Data deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            elif obj_type == 'event':
                obj = Events.objects.get(pk=kwargs['pk'])
                serializer = EventsSerializer(obj)
                obj.delete()
                return Response({'message': 'Event Data deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            
            elif obj_type == 'project':
                obj = Project.objects.get(pk=kwargs['pk'])
                serializer = ProjectSerializer(obj)
                obj.delete()
                return Response({'message': 'Project Data deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            elif obj_type == 'research':
                obj = Research.objects.get(pk=kwargs['pk'])
                serializer = ResearchSerializer(obj)
                obj.delete()
                return Response({'message': 'Research Data deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            elif obj_type == 'patent':
                obj = Patent.objects.get(pk=kwargs['pk'])
                serializer = PatentSerializer(obj)
                obj.delete()
                return Response({'message': 'Patent Data deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            elif obj_type == 'teachereducation':
                obj = TeacherEducation.objects.get(pk=kwargs['pk'])
                serializer = TeacherEducationSerializer(obj)
                obj.delete()
                return Response({'message': 'TeacherEducation Data deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'message': 'Invalid type specified'}, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GalleryUpload(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, format=None):
        gallery = GallerySerializer(data=request.data,many=True)
        try:
            if gallery.is_valid():
                gallery.save()
                return Response(gallery.data, status=status.HTTP_201_CREATED)
            return Response(gallery.errors, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class PostPublicData(viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    def create(self, request, *args, **kwargs):
        email = request.query_params.get('email', None)
        object_type = request.query_params.get('type', None)
        try:
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
                image=request.FILES.get("image")
                title=request.data.get("title")
                location=request.data.get("location")
                date =  request.data.get("date")
                event=Events(title=title,image=image,location=location,date=date ,description=description,link=link,teacher=teacher)
                event.save()
                return Response({"message": "Event Created Successfully"}, status=status.HTTP_201_CREATED)
            elif object_type == 'tutorial':
                image=request.FILES.get("image")
                title=request.data.get("title")
                tags=request.data.get("tags")
                tutorial=Tutorials(title=title,image=image,tags=tags ,description=description,link=link,teacher=teacher)
                tutorial.save()
                return Response({"message": "Event Created Successfully"}, status=status.HTTP_201_CREATED)
            else:
                return Response({"message": "cannot find the type"}, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ProfileUpdate(viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    serializer_class = TeacherUpdateSerializer
    def update(self, request, pk):
        email = request.query_params.get('email', None)
        try:
            if not email:
                return Response({"message": "Email cannot be null"}, status=status.HTTP_400_BAD_REQUEST)
            try:
                teacher = Teacher.objects.get(pk=pk,email=email)
            except Teacher.DoesNotExist:
                return Response({"message": "Teacher not found"}, status=status.HTTP_404_NOT_FOUND)
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
            research_authors=request.data.get('research_authors', None)
            if research_title and research_date and research_authors:
                research, created = Research.objects.get_or_create(
                    teacher=teacher,
                    title=research_title,
                    date=research_date,
                    defaults={'authors': research_authors, 'url': request.data.get('research_url', None)}
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
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UploadFiles(viewsets.ModelViewSet):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    serializer_class = NotesSerializer
    def create(self, request, *args, **kwargs):
        course_id=self.request.query_params.get('type')
        type = self.request.query_params.get('type')
        if not course_id: return Response({"error": "Course id not found"}, status=status.HTTP_400_BAD_REQUEST)
        course = Course.objects.get(course_id=course_id)
        if not course: return Response({"error": "Course not found may be id is different "}, status=status.HTTP_400_BAD_REQUEST)
        try:
            if type =='notes':
                title = request.data.get("title")
                uploaded_file = request.FILES.get("file")
                if not uploaded_file or not title: return Response({"error": "file or title not found"}, status=status.HTTP_400_BAD_REQUEST)
                note = Notes(name=title, pdf=uploaded_file,course=course)
                note.save()
                return Response({"message": "Notes created successfully"}, status=status.HTTP_201_CREATED)
            elif type =='assignment':
                title = request.data.get("title")
                file = request.FILES.get("file")
                description = request.data.get("description")
                validity = request.data.get("validity")
                assignment = Assignment(name=title, pdf=file, description=description, validity=validity, course=course)
                assignment.save()
                return Response({"message": "Assignment created successfully"}, status=status.HTTP_201_CREATED)
            Response({'error': 'the type is either `notes` or `assignments` error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class DeleteFilesAPIView(APIView):
    def post(self, request, *args, **kwargs):
        file_id = self.request.query_params.get('id')
        type = self.request.query_params.get('type')
        if not id or not type:
            return Response({"message": "Either 'id' or 'type' is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            if type == 'assignment':
                try:
                    assignment_entry = Assignment.objects.get(id=file_id)
                    assignment_entry.delete()
                    return Response({"message": "Assignment entry deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
                except Assignment.DoesNotExist:
                    return Response({"message": "Assignment entry not found"}, status=status.HTTP_404_NOT_FOUND)
            elif type=='note':
                try:
                    notes_entry = Notes.objects.get(id=file_id)
                    notes_entry.delete()
                    return Response({"message": "Notes entry deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
                except Notes.DoesNotExist:
                    return Response({"message": "Notes entry not found"}, status=status.HTTP_404_NOT_FOUND)
            return Response({"message": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class GetUserFromTokenView(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        refresh_token = request.query_params.get('refresh_token')
        access_token = request.query_params.get('access_token')
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
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

# class RegistrationView(APIView):
#     def post(self, request):
#         password = request.data.get('password')
#         username=request.data.get('username')
#         name = request.data.get('name')
#         email = request.data.get('email')
#         print(password)
#         if not username or not password:
#             return Response({'message': 'Username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
#         if User.objects.filter(username=username).exists():
#             return Response({'message': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
#         user = User.objects.create_user(username=username, password=password,is_active=True)
#         user.name = name
#         user.save()
#         return Response({'message': 'User created but not Verified.'}, status=status.HTTP_201_CREATED)

# class CustomObtainTokenView(APIView):
#     def post(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         if not username or not password:
#             return Response({'message': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
#         user = authenticate(username=username, password=password)
#         if user is None:
#             return Response({'message': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
#         login(request, user)
#         refresh = RefreshToken.for_user(user)
#         access = str(refresh.access_token)
#         return Response({'access_token': access,'refresh_token': str(refresh),'message': 'Logging in'}, status=status.HTTP_200_OK)
    

# class CustomRefreshTokenView(APIView):
#     authentication_classes=[JWTAuthentication]
#     permission_classes = (IsAuthenticated,)
#     def post(self, request):
#         refresh = RefreshToken(request.data.get('refresh_token'))
#         access_token = str(refresh.access_token)
#         return Response({'access_token': access_token,'refresh_token': str(refresh)}, status=status.HTTP_200_OK)
    
# class LogoutView(APIView):
#     authentication_classes=[JWTAuthentication]
#     permission_classes = (IsAuthenticated,)
#     def post(self, request):
#         logout(request)
#         return Response({'message': 'Logged out successfully.'}, status=status.HTTP_200_OK)
        

    


     