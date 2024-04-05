from rest_framework import serializers
from it_academics.models import *

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = [ 'first_name', 'last_name', 'profile_image']

class CollegeEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollegeEvent
        fields = '__all__'

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ['faculty_id', 'first_name', 'last_name', 'department', 'bio', 'designation', 'highest_degree', 'profile_image', 'website_url', 'email', 'phone_number']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    faculty = InstructorSerializer(source='faculty_id')
    class Meta:
        model = Project
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    instructor = InstructorSerializer()
    class Meta:
        model = Course
        fields = '__all__'

class FacultyDetailSerializer(serializers.ModelSerializer):
    education = EducationSerializer(many=True, read_only=True, source='education_set')
    research = ResearchSerializer(many=True, read_only=True, source='research_set')
    projects = ProjectSerializer(many=True, read_only=True, source='project_set')
    courses = CourseSerializer(many=True, read_only=True, source='course_set')

    class Meta:
        model = Faculty
        fields = ['faculty_id', 'first_name', 'last_name', 'department', 'bio', 'designation', 'highest_degree', 'profile_image', 'website_url', 'email', 'phone_number', 'education', 'research', 'projects', 'courses']

class BtechStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BtechStudent
        fields = ['enrollment_no', 'name', 'batch', 'email']

class PhdScholarSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhdScholar
        fields = '__all__'

class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = '__all__'

class ResearchSerializer(serializers.ModelSerializer):
    faculty = InstructorSerializer(source='faculty_id')
    class Meta:
        model = Research
        fields = '__all__'

class StudyMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyMaterial
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image', 'caption', 'uploaded_at']

class GallerySerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Gallery
        fields = ['id', 'title', 'description', 'cover_image', 'created_at', 'images']

class SiteFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteFile
        fields = '__all__'