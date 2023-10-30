# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from IT_DEPARTMENT.models import *
from PublicAPI.models import *
 
# create a serializer class
class TeacherSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Teacher
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

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