# Generated by Django 4.2.6 on 2023-11-06 17:55

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
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_id', models.CharField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('credit', models.BigIntegerField()),
                ('semester', models.CharField(max_length=255)),
                ('syllabus', models.JSONField(blank=True, null=True)),
                ('description', models.TextField(blank=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Holiday',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateTimeField()),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('teacher_id', models.CharField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('description', models.CharField(blank=True, max_length=255)),
                ('phone', models.BigIntegerField()),
                ('research_field', models.TextField(blank=True, max_length=255)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('profile_photo', models.ImageField(upload_to='teacher_profile/')),
                ('about', models.JSONField(blank=True, null=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TeacherEducation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('degree', models.CharField(max_length=255)),
                ('college', models.CharField(max_length=255)),
                ('Year', models.BigIntegerField()),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Research',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('authors', models.TextField()),
                ('url', models.URLField(blank=True, null=True)),
                ('date', models.CharField(max_length=255)),
                ('auto_date', models.DateTimeField(auto_now_add=True)),
                ('teacher', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('link', models.URLField(blank=True)),
                ('auto_date', models.DateTimeField(auto_now_add=True)),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Patent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patent', models.CharField(max_length=255)),
                ('date', models.CharField(max_length=255)),
                ('number', models.BigIntegerField(unique=True)),
                ('auto_date', models.DateTimeField(auto_now_add=True)),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notes_id', models.CharField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('pdf', models.FileField(upload_to='notes/')),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.course')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.AddField(
            model_name='course',
            name='teacher',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.teacher'),
        ),
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('assignment_id', models.CharField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('pdf', models.FileField(upload_to='assignments/')),
                ('description', models.CharField(blank=True, max_length=1000, null=True)),
                ('validity', models.CharField(blank=True, max_length=255, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.course')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('announcement_id', models.CharField(max_length=255, unique=True)),
                ('description', models.CharField(max_length=255)),
                ('link', models.URLField(max_length=255)),
                ('date', models.DateTimeField(auto_now=True)),
                ('teacher', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='Alert',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alert_id', models.CharField(default='default_id', max_length=255, unique=True)),
                ('description', models.CharField(max_length=255)),
                ('link', models.URLField(default='https://it.nitsri.ac.in/', max_length=255)),
                ('date', models.DateTimeField(auto_now=True)),
                ('teacher', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='IT_DEPARTMENT.teacher')),
            ],
        ),
    ]
