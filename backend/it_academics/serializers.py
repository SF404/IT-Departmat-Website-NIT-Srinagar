from rest_framework import serializers
from .models import Faculty, Education, Research, Project, Course, StudyMaterial, Announcement, CollegeEvent, Alumni, BtechStudent, PhdScholar, Image, Gallery, SiteFile

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ['faculty_id', 'first_name', 'last_name', 'department', 'bio', 'designation', 'highest_degree', 'profile_image', 'website_url', 'email', 'phone_number']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['education_id', 'institution', 'degree', 'graduation_year']

class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['project_id', 'title', 'description', 'start_date', 'end_date', 'url', 'attachment']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class StudyMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyMaterial
        fields = '__all__'

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'

class CollegeEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollegeEvent
        fields = '__all__'

class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = '__all__'

class BtechStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BtechStudent
        fields = '__all__'

class PhdScholarSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhdScholar
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        exclude = ['gallery']

class GallerySerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Gallery
        fields = '__all__'

class SiteFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteFile
        fields = '__all__'