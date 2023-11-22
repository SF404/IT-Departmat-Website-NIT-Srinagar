from .serializers import *
from IT_DEPARTMENT.serializers import *
from IT_DEPARTMENT.models import *
from PublicAPI.models import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import status,viewsets
from rest_framework.response import Response
from django.http import FileResponse
from django.db import DatabaseError
from datetime import datetime
import requests
from bs4 import BeautifulSoup
import json

# Create your views here.
# exceptions are handled successfully
# DOwnloadAssignment and DOwnloadNotes is merged to DownloadFile with quiry param type and id 

class TeacherDataView(viewsets.ModelViewSet):
    def list(self, request, *args, **kwargs):
        data_type = self.request.query_params.get('type')
        email = self.request.query_params.get('email')
        research_year=self.request.query_params.get('research_year')
        try:
            if data_type:
                model_class, serializer_class = self.get_model_and_serializer(data_type)
                if email:
                    teacher = Teacher.objects.filter(email=email).first()
                    if teacher:
                        queryset = model_class.objects.filter(teacher=teacher)
                    else:
                        return Response({'error': 'Teacher not Found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                elif research_year:
                    queryset = model_class.objects.filter(date__gte=research_year)
                else:
                    queryset = model_class.objects.all()
                serializer = serializer_class(queryset, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Data type not specified'}, status=status.HTTP_400_BAD_REQUEST)
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def get_model_and_serializer(self, data_type):
        models = {
            'project': (Project, ProjectSerializer),
            'patent': (Patent, PatentSerializer),
            'teachereducation': (TeacherEducation, TeacherEducationSerializer),
            'research': (Research, ResearchSerializer),
            'announcement': (Announcement, AnnouncementSerializer),
            'tutorials': (Tutorials, TutorialsSerializer),
            'events': (Events, EventsSerializer),
            # Add more models as needed
        }

        return models.get(data_type.lower(), (None, None))


class TeacherStudentView(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer

    def get_serializer_class(self):
        data_type = self.request.query_params.get('type')
        if data_type == 'teacher':
            return TeacherSerializer
        elif data_type == 'phdstudent':
            return PhdStudentSerializer
        elif data_type == 'list':
            return TeacherMails
        else:
            return TeacherSerializer
    def get_queryset(self):
        data_type = self.request.query_params.get('type')
        try:
            id = self.request.query_params.get('Id')
            email = self.request.query_params.get('email')
            if data_type == 'teacher':
                if id:
                    teacher = Teacher.objects.filter(id=id)
                    if not teacher:
                        return Teacher.objects.none()
                    return teacher
                if email:
                    teacher = Teacher.objects.filter(email=email)
                    if not teacher:
                        return Teacher.objects.none()
                    return teacher
                else:
                    return Teacher.objects.all()
            elif data_type == 'phdstudent':
                alumni = self.request.query_params.get('alumni')
                if id:
                    student = Phd_Student.objects.filter(id=id)
                    if not student:
                        return Phd_Student.objects.none()
                    return student
                if email:
                    student = Phd_Student.objects.filter(email=email)
                    if not student:
                        return Phd_Student.objects.none()
                    return student
                else:
                    if alumni:
                        return Phd_Student.objects.filter(alumni=alumni)
                    return Phd_Student.objects.all()
            elif data_type == 'list':
                teachers = Teacher.objects.all()
                return teacher
            else:
                return Teacher.objects.none()
        except DatabaseError as e:
            return Teacher.objects.none()
        except Exception as e:
            return Teacher.objects.none()
class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    def get_queryset(self):
        try:
            email = self.request.query_params.get('email')
            print(email)
            semester_id = self.request.query_params.get('semesterId')
            if email: 
                teacher = Teacher.objects.get(email=email)
                if not teacher: return Course.objects.none()
                queryset = Course.objects.filter(teacher=teacher)
                return queryset
            elif semester_id:
                queryset = Course.objects.filter(semester=semester_id)
                return queryset
            return Course.objects.all()
        except DatabaseError as e:
            return Course.objects.none()
        except Exception as e:
            return Course.objects.none()

class ShowFiles(viewsets.ModelViewSet):
    def get_serializer_class(self):
        data_type = self.request.query_params.get('type')
        if data_type == 'notes':
            return NotesSerializer
        elif data_type == 'assignment':
            return AssignmentSerializer
        else:
            return NotesSerializer
    def get_queryset(self):
        cid = self.request.query_params.get('cid')
        serializer_class = self.get_serializer_class()
        try:
            if cid:
                course = Course.objects.get(course_id=cid)
                if not course:
                    return serializer_class.Meta.model.objects.none()
                data = serializer_class.Meta.model.objects.filter(course=course)
            else:
                data = serializer_class.Meta.model.objects.all()
            return data
        except DatabaseError as e:
            return serializer_class.Meta.model.objects.none()
        except Exception as e:
            return serializer_class.Meta.model.objects.none()
            
class DownloadFile(APIView):
    def post(self, request, *args, **kwargs):
        file_id = self.request.query_params.get('id')
        type = self.request.query_params.get('type')
        if not file_id or not type : Response({'error': 'Type or id not found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        try:
          if type =='assignment':
            my_model_instance = Assignment.objects.get(id=file_id)
            if not my_model_instance:
                return Response({"error": "Assignment not found."}, status=status.HTTP_404_NOT_FOUND)
            file_path = my_model_instance.pdf.path
            return FileResponse(open(file_path, 'rb'), as_attachment=True)
          elif type =='notes':
              my_model_instance = Notes.objects.get(id=file_id)
          if not my_model_instance:
              return Response({"message": "Note not found."}, status=status.HTTP_404_NOT_FOUND)         
          file_path = my_model_instance.pdf.path
          return FileResponse(open(file_path, 'rb'), as_attachment=True)
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class GalleryView(APIView):
    serializer_class = GallerySerializer
    def get(self, request):
        try:
          queryset = Gallery.objects.all()
          serializer = self.serializer_class(queryset, many=True)
          return Response(serializer.data, status=status.HTTP_200_OK)
        except DatabaseError as e:
          return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
          return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class FileShow(viewsets.ModelViewSet):
    serializer_class = FileSerializer
    def get_queryset(self):       
        name = self.request.query_params.get('name')
        type = self.request.query_params.get('type')
        query = self.request.query_params.get('q')
        try:
            if not query and not type and not  name : return File.objects.none()
            if query:
                if query =='alumni' :
                    current_year = datetime.now().year
                    return File.objects.filter(type=type,name__lte=str(current_year - 4))
                elif query =='btech':
                    current_year = datetime.now().year
                    return File.objects.filter(type=type,name__gt=str(current_year - 4))
                elif query =='file':
                    return File.objects.filter(type=type, name=name)
                else :
                    return False
            elif type:
                return File.objects.filter(type=type)
            elif name:
                return File.objects.filter(name=name)
        except DatabaseError as e:
            return File.objects.none()
        except Exception as e:
            return File.objects.none()
        
class HolidayView(viewsets.ModelViewSet):
    serializer_class = HolidaySerializer
    def get_queryset(self):
        month = self.request.query_params.get('activeMonth')
        try :
            if not month: queryset = Holiday.objects.all()
            else: queryset = Holiday.objects.filter(date__month=month)
            return queryset
        except DatabaseError as e:
            return Holiday.object.none()
        except Exception as e:
            return Holiday.object.none()
        
class GetData(APIView):
     def get(self, request, *args, **kwargs):
        type = request.query_params.get('type')
        if not type : Response({'error': 'type may be event or news'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        try:
            if type =='events':
                url = 'https://nitsri.ac.in/'
                if request.method == "GET":
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
            elif type == 'news' and request.method == "GET":
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
        except DatabaseError as e:
            return Response({'error': 'Database error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)