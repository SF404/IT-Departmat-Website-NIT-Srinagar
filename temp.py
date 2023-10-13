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
                course_id ="ITT701",
                name = "Wireless & Mobile Communication",
                credit=4,
                semester="7th",
                syllabus="Introduction-Evolution of mobile radio communications",
                description = "Networks- Integrated Services Digital Network (ISDN)",
                teacher = "teacher"        
                )
            

            Course.objects.create(
                course_id = "ITT703",
                name = "Information Security",
                credit=3,
                semester="7TH",
                syllabus="Balancing Information Security and Access",
                description ="Introduction to the Concepts of Security",
                teacher = "teacher"        
                )
             
            Course.objects.create(
                course_id = "ITT705",
                name = "Image Processing",
                credit=3,
                semester="7TH",
                syllabus="IMAGE ENHANCEMENT IN THE SPATIAL DOMAIN",
                description ="COLOUR IMAGE PROCESSING",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT707",
                name = "Cloud Computing",
                credit=4,
                semester="7TH",
                syllabus="CLOUD COMPUTING SECURITY CHALLENGES:",
                description ="Introduction to CLOUD COMPUTING",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT601",
                name = "Java Programming",
                credit=3,
                semester="6TH",
                syllabus="Java Programming Concept",
                description ="Introduction to JAVA",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT603",
                name = "Big Data",
                credit=4,
                semester="6TH",
                syllabus="Big Data Concept",
                description ="Introduction to Big Data",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT604",
                name = "Computer Networks",
                credit=4,
                semester="6TH",
                syllabus="Computer Networks Concept",
                description ="Introduction to Computer Networks",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT606",
                name = "Computer Graphics",
                credit=4,
                semester="6TH",
                syllabus="Computer Graphics Concept",
                description ="Introduction to Computer Graphics",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT608",
                name = "Artificial Intelligence ",
                credit=3,
                semester="6TH",
                syllabus="Artificial Intelligence  Concept",
                description ="Introduction to Artificial Intelligence ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT501",
                name = "Computer Organisation & Architecture ",
                credit=4,
                semester="5TH",
                syllabus="Computer Organisation & Architecture Concept",
                description ="Introduction to Computer Organisation & Architecture  ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT507",
                name = "Microprocessor ",
                credit=3,
                semester="5TH",
                syllabus="Microprocessor Concept",
                description ="Introduction to Microprocessor",
                teacher = "teacher"        
                )
            

            Course.objects.create(
                course_id = "ITT509",
                name = "Data Communication",
                credit=3,
                semester="5TH",
                syllabus="Data Communication Concept",
                description ="Introduction to Data Communication",
                teacher = "teacher"        
                )
            

            Course.objects.create(
                course_id = "ITT201",
                name = "Data Structures ",
                credit=4,
                semester="3TH",
                syllabus="Data Structures  Concept",
                description ="Introduction to Data Structures ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT202",
                name = "Signal and Systems  ",
                credit=3,
                semester="3TH",
                syllabus="Signal and Systems   Concept",
                description ="Introduction to Signal and Systems  ",
                teacher = "teacher"        
                ) 
            
            Course.objects.create(
                course_id = "ITT203",
                name = " Software Engineering",
                credit=3,
                semester="3TH",
                syllabus="Software Engineering  Concept",
                description ="Introduction to Software Engineering ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT204",
                name = " Discrete Mathematics and Graph Theory ",
                credit=4,
                semester="3TH",
                syllabus="Discrete Mathematics and Graph Theory  Concept",
                description ="Introduction to Discrete Mathematics and Graph Theory ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "CST201",
                name = " Object Oriented Programming ",
                credit=4,
                semester="3TH",
                syllabus="Object Oriented Programming Concept",
                description ="Introduction to  Object Oriented Programming ",
                teacher = "teacher"        
                )
            Course.objects.create(
                course_id = "ITT250",
                name = " Operating Systems  ",
                credit=4,
                semester="4TH",
                syllabus="Operating Systems  Concept",
                description ="Introduction to  Operating Systems  ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITT251",
                name = " Database Management System",
                credit=4,
                semester="4TH",
                syllabus=" Database Management System Concept",
                description ="Introduction to   Database Management System",
                teacher = "teacher"        
                ) 
            
            Course.objects.create(
                course_id = "ECT251",
                name = " Digital Electronics & Logic Design",
                credit=4,
                semester="4TH",
                syllabus=" Digital Electronics & Logic Design Concept",
                description ="Introduction to   Digital Electronics & Logic Design",
                teacher = "teacher"        
                ) 
            Course.objects.create(
                course_id = "ECT253",
                name = " Communication System",
                credit=4,
                semester="4TH",
                syllabus=" Communication System Concept",
                description ="Introduction to   Communication System",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "EET258",
                name = " Control System",
                credit=3,
                semester="4TH",
                syllabus=" Control System Concept",
                description ="Introduction to   Control System",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITL254",
                name = " Web Programming ",
                credit=2,
                semester="4TH",
                syllabus=" Web Programming  Concept",
                description ="Introduction to   Web Programming ",
                teacher = "teacher"        
                ) 
            
            Course.objects.create(
                course_id = "EEL100",
                name = " Basic Electrical Engineering ",
                credit=4,
                semester="1ST",
                syllabus=" Basic Electrical Engineering Concept",
                description ="Introduction to   Basic Electrical Engineering ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "HUL100",
                name = " Basic English and Communication Skills  ",
                credit=3,
                semester="1ST",
                syllabus=" Basic English and Communication Skills  Concept",
                description ="Introduction to   Basic English and Communication Skills  ",
                teacher = "teacher"        
                )  
            
            Course.objects.create(
                course_id = "CYL100",
                name = " Engineering Chemistry ",
                credit=4,
                semester="1ST",
                syllabus=" Engineering Chemistry  Concept",
                description ="Introduction to  Engineering Chemistry ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "ITL300",
                name = " Computer Programming  ",
                credit=3,
                semester="1ST",
                syllabus=" Computer Programming   Concept",
                description ="Introduction to  Computer Programming  ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "CIP100",
                name = " Engineering Drawing ",
                credit=4,
                semester="1ST",
                syllabus=" Engineering Drawing Concept",
                description ="Introduction to  Engineering Drawing ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "MAL100",
                name = " Mathematics I ",
                credit=4,
                semester="1ST",
                syllabus=" Mathematics I Concept",
                description ="Introduction to  Mathematics I ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "PHL100",
                name = " Engineering Physics",
                credit=4,
                semester="2ND",
                syllabus=" Engineering Physics Concept",
                description ="Introduction to  Engineering Physics",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "HUL101",
                name = " Advanced English Comm.Skills & Organizational Behavior",
                credit=3,
                semester="2ND",
                syllabus="  Advanced English Comm.Skills & Organizational Behavior Concept",
                description ="Introduction to   Advanced English Comm.Skills & Organizational Behavior",
                teacher = "teacher"        
                ) 
            
            Course.objects.create(
                course_id = "CIL100",
                name = " Engineering Mechanics",
                credit=4,
                semester="2ND",
                syllabus="  Engineering Mechanics Concept",
                description ="Introduction to  Engineering Mechanics",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "MEL100",
                name = " Elements of Mechanical Engg.",
                credit=3,
                semester="2ND",
                syllabus="  Elements of Mechanical Engg. Concept",
                description ="Introduction to  Elements of Mechanical Engg.",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "CYL101",
                name = " Environmental Studies ",
                credit=3,
                semester="2ND",
                syllabus="  Environmental Studies  Concept",
                description ="Introduction to  Environmental Studies ",
                teacher = "teacher"        
                )
            
            Course.objects.create(
                course_id = "MAL101",
                name = " Mathematics II",
                credit=4,
                semester="2ND",
                syllabus="  Mathematics II  Concept",
                description ="Introduction to  Mathematics II ",
                teacher = "teacher"        
                )
            

            Course.objects.create(
                course_id = "WSP100",
                name = " Work shop Practice",
                credit=2,
                semester="2ND",
                syllabus="  Work shop Practice  Technique",
                description ="Introduction to  Work shop Practice ",
                teacher = "teacher"        
                )




            self.stdout.write(self.style.SUCCESS('ALL Course entries created.'))