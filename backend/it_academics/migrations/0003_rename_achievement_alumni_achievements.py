# Generated by Django 4.2.8 on 2024-03-22 15:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('it_academics', '0002_rename_current_company_alumni_achievement_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='alumni',
            old_name='achievement',
            new_name='achievements',
        ),
    ]
