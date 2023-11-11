# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from IT_DEPARTMENT.models import *
from PublicAPI.models import *
 
# create a serializer class


class TutorialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorials
        fields = '__all__'

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'


class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = '__all__'

class PatentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patent
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TeacherEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherEducation
        fields = '__all__'
class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'



class TeacherSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Teacher
        fields = '__all__'
        
class CourseSerializer(serializers.ModelSerializer):
    teacher_name = serializers.CharField(source='teacher.name', read_only=True)
    class Meta:
        model = Course
        fields = ['id', 'course_id', 'name', 'credit', 'semester', 'syllabus', 'description', 'date', 'teacher', 'teacher_name']

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = '__all__'

class TeacherMails(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('email','user')


class PhdStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phd_Student
        fields = '__all__'