from IT_DEPARTMENT.models import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import status,viewsets
from rest_framework.response import Response
from .serializers import *
from django.contrib.auth import authenticate
import random
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication



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
        
class HolidayView(viewsets.ModelViewSet):
    serializer_class = HolidaySerializer
    def get_queryset(self):
        month = self.request.query_params.get('activeMonth')
        print(month)
        
        queryset = Holiday.objects.filter(date__month=month)

        return queryset
    
class GetUserFromTokenView(APIView):
    authentication_classes=[JWTAuthentication]
    permission_classes = (IsAuthenticated,)
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
