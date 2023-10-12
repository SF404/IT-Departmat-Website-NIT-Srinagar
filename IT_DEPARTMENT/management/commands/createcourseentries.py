from django.core.management.base import BaseCommand
from IT_DEPARTMENT.models import Course,Teacher
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Add default entries for Course model'

    def handle(self, *args, **kwargs):
            
            teacher=Teacher.objects.create(
                teacher_id =1001,
                name = "Dr. Janib ul Bashir",
                description = "he is a good teacher",
                phone=9149780560,
                research_field="hello"
            )
            
            Course.objects.create(
                course_id ="IT_701",
                name = "Wireless & Mobile Communication",
                credit=4,
                semester="7TH",
                syllabus="Introduction-Evolution of mobile radio communications",
                description = "Networks- Integrated Services Digital Network (ISDN)",
                teacher = teacher        
                )
            

            Course.objects.create(
                course_id = "IT_703",
                name = "Information Security",
                credit=3,
                semester="7TH",
                syllabus="Balancing Information Security and Access",
                description ="Introduction to the Concepts of Security",
                teacher = teacher        
                )
             
            Course.objects.create(
                course_id = "IT_705",
                name = "Image Processing",
                credit=3,
                semester="7TH",
                syllabus="IMAGE ENHANCEMENT IN THE SPATIAL DOMAIN",
                description ="COLOUR IMAGE PROCESSING",
                teacher = teacher        
                )
            
            Course.objects.create(
                course_id = "IT_707",
                name = "Cloud Computing",
                credit=4,
                semester="7TH",
                syllabus="CLOUD COMPUTING SECURITY CHALLENGES:",
                description ="INTRODUCTION TO CLOUD COMPUTING",
                teacher = teacher        
                )
            
            Course.objects.create(
                course_id = "IT_601",
                name = "Java Programming",
                credit=3,
                semester="6TH",
                syllabus="Java Programming DETAILS",
                description ="INTRODUCTION TO JAVA",
                teacher = teacher        
                )
            
            Course.objects.create(
                course_id = "IT_603",
                name = "Big Data",
                credit=4,
                semester="6TH",
                syllabus="Big Data DETAILS",
                description ="INTRODUCTION TO Big Data",
                teacher = teacher        
                )
            self.stdout.write(self.style.SUCCESS('ALL Course entries created.'))
