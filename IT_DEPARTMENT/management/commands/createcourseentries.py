from django.core.management.base import BaseCommand
from IT_DEPARTMENT.models import Course
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Add default entries for Course model'

    def handle(self, *args, **kwargs):
            Course.objects.create(
                cid='COA5th',
                name='Computer Architecture and Organization',
                semester='5th',
                description='Course Description 1',
            )

            Course.objects.create(
                cid='DAA5th',
                name='Design and Analysis of Algorithm',
                semester='5th',
                description='Course Description 2',
            )

            Course.objects.create(
                cid='MICRO5th',
                name='Microprocessor',
                semester='5th Semester',
                description='Course Description 3',
            )
            Course.objects.create(
                cid='TOC5th',
                name='Theory of computation',
                semester='5th',
                description='Course Description 3',
            )

            self.stdout.write(self.style.SUCCESS('ALL Course entries created.'))
