from django.db import models
from users.models import User

class Faculty(models.Model):
    faculty_id = models.BigAutoField(primary_key=True)
    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    department = models.CharField(max_length=100, default="Information Technology")
    bio = models.TextField(max_length=1000, null=True, blank=True)
    designation = models.CharField(max_length=100, null=True, blank=True)
    highest_degree = models.CharField(max_length=100, null=True, blank=True)
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    website_url = models.URLField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return f"{self.faculty_id} - {self.user_id.first_name}"
    
class Course(models.Model):
    course_id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=255)
    department = models.CharField(max_length=255)
    credit = models.IntegerField()
    semester = models.IntegerField()
    instructor = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True, blank=True)
    syllabus = models.FileField(upload_to='syllabus/', null=True, blank=True)

    def __str__(self):
        return self.name

class StudyMaterial(models.Model):
    material_type_choices = (
        ('lecture_notes', 'Lecture Notes'),
        ('assignment', 'Assignment'),
        ('textbook', 'Textbook'),
        ('lab_manual', 'Lab Manual'),
        ('question_papers', 'Question Papers'),
        ('solutions', 'Solutions'),
        ('project_guidelines', 'Project Guidelines'),
        ('other', 'Other'),
    )
    material_id = models.BigAutoField(primary_key=True)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    type = models.CharField(max_length=255, choices=material_type_choices)
    title = models.CharField(max_length=255)
    attachment = models.FileField(upload_to='study_material/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Education(models.Model):
    education_id = models.BigAutoField(primary_key=True)
    faculty_id = models.ForeignKey(Faculty, on_delete=models.CASCADE)  
    institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    graduation_year = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.degree

class BtechStudent(models.Model):
    enrollment_no = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    batch = models.IntegerField()
    email = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name
    
class PhdScholar(models.Model):
    enrollmentNumber = models.CharField(max_length=100, unique=True)
    supervisor = models.CharField(max_length=200)
    researchArea = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    email = models.EmailField(null=True, blank=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Research(models.Model):
    research_id = models.BigAutoField(primary_key=True)
    faculty_id = models.ForeignKey(Faculty, on_delete=models.CASCADE, null=True, blank=True)  
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    research_date = models.DateField()
    url = models.CharField(max_length=255, null=True, blank=True)
    attachment = models.FileField(upload_to='research_attachment/', null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Announcement(models.Model):
    announcement_id = models.BigAutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=255)
    url = models.CharField(max_length=255, null=True, blank=True)
    attachment = models.FileField(upload_to='announcement_attachment/', null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Project(models.Model):
    project_id = models.BigAutoField(primary_key=True)
    faculty_id = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    url = models.CharField(max_length=255, null=True, blank=True)
    attachment = models.FileField(upload_to='project_attachment/', null=True, blank=True)

    def __str__(self):
        return self.title

class Alumni(models.Model):
    alumni_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    present_job = models.CharField(max_length=255, null=True, blank=True)
    previous_jobs = models.CharField(max_length=255, null=True, blank=True)
    linkedin_url = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=255, null=True, blank=True)
    graduation_year = models.IntegerField(null=True, blank=True)
    achievements = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name

class CollegeEvent(models.Model):
    event_id = models.BigAutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,)
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=1000, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    start_date = models.DateTimeField(null=True, blank=True)
    end_date = models.DateTimeField(null=True, blank=True)
    category_choices = (
        ('academic', 'Academic'),
        ('social', 'Social'),
        ('cultural', 'Cultural'),
        ('sports', 'Sports'),
        ('other', 'Other'),
    )
    category = models.CharField(max_length=255, choices=category_choices)
    registration_link = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    attachment = models.FileField(upload_to='event_attachment/', null=True, blank=True)

    def __str__(self):
        return self.title

class Gallery(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    cover_image = models.ImageField(upload_to='gallery/covers/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Image(models.Model):
    gallery = models.ForeignKey(Gallery, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='gallery/images/')
    caption = models.CharField(max_length=255, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image in {self.gallery.title}"
    

class SiteFile(models.Model):
    CATEGORY_CHOICES = (
        ('downloads', 'Downloads'),
        ('time_tables', 'Time Tables'),
        ('placement_brochure', 'Placement Brochure'),
    )

    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    file = models.FileField(upload_to='files/')
    title = models.CharField(max_length=100)
    metadata = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
