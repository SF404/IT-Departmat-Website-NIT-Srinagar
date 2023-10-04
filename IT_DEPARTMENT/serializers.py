# import serializers from the REST framework
from rest_framework import serializers
 
# import the todo data model
from .models import *
 
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

# class StudentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = 
#         fields = '__all__'