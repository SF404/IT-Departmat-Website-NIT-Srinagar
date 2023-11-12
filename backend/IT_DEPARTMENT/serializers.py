# import serializers from the REST framework
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
 
# import the todo data model
from .models import *
from PublicAPI.models import *
 
# create a serializer class

class UserCreateSerializer(UserCreateSerializer):
    
    class Meta(UserCreateSerializer.Meta):
        model=User
        fields=('id', 'name', 'password')


class TeacherSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Teacher
        fields = '__all__'


class TeacherUpdateSerializer(serializers.ModelSerializer):
    profile_photo = serializers.ImageField(required=False)

    class Meta:
        model = Teacher
        fields = ['phone', 'profile_photo', 'research_field', 'about']

    def update(self, instance, validated_data):
        # Ensure 'phone' is compulsory
        phone = validated_data.get('phone', instance.phone)
        instance.phone = phone

        # Update the optional fields
        if 'profile_photo' in validated_data:
            instance.profile_photo = validated_data['profile_photo']

        instance.research_field = validated_data.get('research_field', instance.research_field)
        instance.about = validated_data.get('about', instance.about)

        instance.save()
        return instance

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
        
class HolidaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Holiday
        fields = '__all__'

class TeacherMails(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('email','user')

class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ('image',)