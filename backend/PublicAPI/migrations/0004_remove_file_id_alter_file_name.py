# Generated by Django 4.2.1 on 2023-11-13 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PublicAPI', '0003_file_delete_phd_student'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='id',
        ),
        migrations.AlterField(
            model_name='file',
            name='name',
            field=models.CharField(max_length=255, primary_key=True, serialize=False),
        ),
    ]
