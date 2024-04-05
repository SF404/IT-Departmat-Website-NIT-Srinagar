# Generated by Django 4.2.8 on 2024-03-15 19:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Alumni',
            fields=[
                ('alumni_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('current_occupation', models.CharField(blank=True, max_length=255, null=True)),
                ('current_company', models.CharField(blank=True, max_length=255, null=True)),
                ('linkedin_url', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.CharField(max_length=255)),
                ('phone', models.CharField(blank=True, max_length=255, null=True)),
                ('graduation_year', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='BtechStudent',
            fields=[
                ('enrollment_no', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('batch', models.IntegerField()),
                ('email', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('course_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('department', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, max_length=1000, null=True)),
                ('credit', models.IntegerField()),
                ('semester', models.IntegerField()),
                ('syllabus', models.FileField(blank=True, null=True, upload_to='syllabus/')),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('faculty_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(blank=True, max_length=50, null=True)),
                ('department', models.CharField(default='Information Technology', max_length=100)),
                ('bio', models.TextField(blank=True, max_length=1000, null=True)),
                ('designation', models.CharField(blank=True, max_length=100, null=True)),
                ('highest_degree', models.CharField(blank=True, max_length=100, null=True)),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='profile_images/')),
                ('website_url', models.URLField(blank=True, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('phone_number', models.CharField(blank=True, max_length=20, null=True)),
                ('user_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('cover_image', models.ImageField(upload_to='gallery/covers/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='PhdScholar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enrollmentNumber', models.CharField(max_length=100, unique=True)),
                ('supervisor', models.CharField(max_length=200)),
                ('researchArea', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='SiteFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('downloads', 'Downloads'), ('time_tables', 'Time Tables'), ('placement_brochure', 'Placement Brochure')], max_length=50)),
                ('file', models.FileField(upload_to='files/')),
                ('title', models.CharField(max_length=100)),
                ('metadata', models.JSONField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='StudyMaterial',
            fields=[
                ('material_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('type', models.CharField(choices=[('lecture_notes', 'Lecture Notes'), ('assignment', 'Assignment'), ('textbook', 'Textbook'), ('lab_manual', 'Lab Manual'), ('question_papers', 'Question Papers'), ('solutions', 'Solutions'), ('project_guidelines', 'Project Guidelines'), ('other', 'Other')], max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('attachment', models.FileField(blank=True, null=True, upload_to='study_material/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('course_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_academics.course')),
            ],
        ),
        migrations.CreateModel(
            name='Research',
            fields=[
                ('research_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=1000)),
                ('research_date', models.DateField()),
                ('url', models.CharField(blank=True, max_length=255, null=True)),
                ('attachment', models.FileField(blank=True, null=True, upload_to='research_attachment/')),
                ('created_at', models.DateField(auto_now_add=True)),
                ('faculty_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='it_academics.faculty')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('project_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=1000)),
                ('start_date', models.DateField(blank=True, null=True)),
                ('end_date', models.DateField(blank=True, null=True)),
                ('url', models.CharField(blank=True, max_length=255, null=True)),
                ('attachment', models.FileField(blank=True, null=True, upload_to='project_attachment/')),
                ('faculty_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_academics.faculty')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='gallery/images/')),
                ('caption', models.CharField(blank=True, max_length=255)),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('gallery', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='it_academics.gallery')),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('education_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('institution', models.CharField(max_length=255)),
                ('degree', models.CharField(max_length=255)),
                ('graduation_year', models.IntegerField(blank=True, null=True)),
                ('faculty_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='it_academics.faculty')),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='instructor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='it_academics.faculty'),
        ),
        migrations.CreateModel(
            name='CollegeEvent',
            fields=[
                ('event_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, max_length=1000, null=True)),
                ('location', models.CharField(blank=True, max_length=255, null=True)),
                ('start_date', models.DateTimeField(blank=True, null=True)),
                ('end_date', models.DateTimeField(blank=True, null=True)),
                ('category', models.CharField(choices=[('academic', 'Academic'), ('social', 'Social'), ('cultural', 'Cultural'), ('sports', 'Sports'), ('other', 'Other')], max_length=255)),
                ('registration_link', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('updated_at', models.DateField(auto_now=True)),
                ('attachment', models.FileField(blank=True, null=True, upload_to='event_attachment/')),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('announcement_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('url', models.CharField(blank=True, max_length=255, null=True)),
                ('attachment', models.FileField(blank=True, null=True, upload_to='announcement_attachment/')),
                ('created_at', models.DateField(auto_now_add=True)),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
