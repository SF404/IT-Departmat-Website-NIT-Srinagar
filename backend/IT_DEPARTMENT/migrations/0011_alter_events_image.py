# Generated by Django 4.2.1 on 2023-11-12 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IT_DEPARTMENT', '0010_alter_teacher_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='image',
            field=models.ImageField(blank=True, upload_to='events/'),
        ),
    ]
