from django.core.management.base import BaseCommand
from IT_DEPARTMENT.models import *
from PublicAPI.models import Phd_Student
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Add default entries for Course model'

    def handle(self, *args, **kwargs):
            
            janib=Teacher.objects.create(
                teacher_id ="janibbashir@nitsri.ac.in",
                name = "Dr. Janib ul Bashir",
                description = "Assistant Professor ",
                email = "janibbashir@nitsri.ac.in",
                phone=8825099229,
                profile_photo="teacher_profile/JanibSir.jpeg",
                research_field="Computer Architecture, Parallel Programming, on-chip security, on-chip networks"
            )
            shabir=Teacher.objects.create(
                teacher_id ="shabir@nitsri.net",
                name = "Dr. Shabir Ahmad Sofi",
                description = "HOD and Assistant Professor",
                email = "shabir@nitsri.net",
                phone=94190099711,
                profile_photo="teacher_profile/ShabirSir.jpeg",
                research_field="Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data"
            )
            iqra=Teacher.objects.create(
                teacher_id ="iqraaltaf@nitsri.ac.in",
                name = "Dr. Iqra Altaf Gillani",
                description = "Assistant Professor",
                email = "iqraaltaf@nitsri.ac.in",
                phone=941945399712,
                profile_photo="teacher_profile/IqraMam.jpeg",
                research_field="Data Algorithmics, Probabilistic Analysis of Networks, Distributed Computation, Network and Data Science."
            )
            prabal=Teacher.objects.create(
                teacher_id ="prabal.verma@nitsri.net",
                name = "Dr. Prabal Verma",
                description = "Assistant Professor",
                email = "prabal.verma@nitsri.net",
                phone=92134305466,
                profile_photo="teacher_profile/PrabalSir.jpeg",
                research_field="Algorithms, Swarm Optimization Algorithms, Machine learning optimization"
            )
            arooj=Teacher.objects.create(
                teacher_id ="arooj@nitsri.net",
                name = "Ms. Arooj Nissar",
                description = "Assistant Professor",
                email = "arooj@nitsri.net",
                phone=9018853344,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Digital Image Processing, Network Security, Computer Vision, Medical Image Analysis."
            )
            rajes=Teacher.objects.create(
                teacher_id ="rmrajesofficial.0@gmail.com",
                name = "Rajes Manna",
                description = "Management team",
                email = "rmrajesofficial.0@gmail.com",
                phone=9149780559,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Tech Team"
            )
            suhaib=Teacher.objects.create(
                teacher_id ="suhaibsworkspace@gmail.com",
                name = "Suhaib Salmani",
                description = "Management team",
                email = "suhaibsworkspace@gmail.com",
                phone=8492002286,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Tech Team"
            )
            arman=Teacher.objects.create(
                teacher_id ="armsce856@gmail.com",
                name = "Arman Ansari",
                description = "Management team",
                email = "armsce856@gmail.com",
                phone=6006280709,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Tech Team"
            )

            Phd_Student.objects.create(
                phd_student_id ="kalimullahlone@gmail.com",
                enroll="2018PHAITE003",
                name = "Kalimullah Lone",
                description = " ",
                email = "kalimullahlone@gmail.com",
                phone=123451,
                profile_photo="phd_student/kalimullah.jpg",
                research_field="Big Data, Cloud Computing"
            )
            Phd_Student.objects.create(
                phd_student_id ="jehangirnit@gmail.com",
                enroll=" 2018PHAITE004",
                name = "Jehangir Ali",
                description = " ",
                email = "jehangirnit@gmail.com",
                phone=123452,
                profile_photo="phd_student/jahangir.jpg",
                research_field="Blockchain and Internet of Things"
            )
            Phd_Student.objects.create(
                phd_student_id ="njkhan91@gmail.com",
                enroll="2018PHAITE001",
                name = "Nadeem Yousuf",
                description = " ",
                email = "njkhan91@gmail.com",
                phone=123453,
                profile_photo="phd_student/nadeem.jpg",
                research_field="Machine Learning"
            )
            Phd_Student.objects.create(
                phd_student_id ="ksdbhat99@gmail.com",
                enroll="2019PHAITE002",
                name = "Khurshid Bhat",
                description = " ",
                email = "ksdbhat99@gmail.com",
                phone=123454,
                profile_photo="phd_student/khurshid.jpg",
                research_field="Artificial Intelligence,Data Science"
            )
            Course.objects.create(
                course_id ="IT_701",
                name = "Wireless & Mobile Communication",
                credit=4,
                semester=7,
                syllabus="Introduction-Evolution of mobile radio communications",
                description = "Networks- Integrated Services Digital Network (ISDN)",
                teacher = janib        
                )
            
            Course.objects.create(
                course_id = "IT_703",
                name = "Information Security",
                credit=3,
                semester=7,
                syllabus="Balancing Information Security and Access",
                description ="Introduction to the Concepts of Security",
                teacher = janib        
                )
             
            Course.objects.create(
                course_id = "IT_705",
                name = "Image Processing",
                credit=3,
                semester=7,
                syllabus="IMAGE ENHANCEMENT IN THE SPATIAL DOMAIN",
                description ="COLOUR IMAGE PROCESSING",
                teacher = janib        
                )
            
            Course.objects.create(
                course_id = "IT_707",
                name = "Cloud Computing",
                credit=4,
                semester=7,
                syllabus="CLOUD COMPUTING SECURITY CHALLENGES:",
                description ="INTRODUCTION TO CLOUD COMPUTING",
                teacher = janib        
                )
            
            Course.objects.create(
                course_id = "IT_601",
                name = "Java Programming",
                credit=3,
                semester=6,
                syllabus="Java Programming DETAILS",
                description ="INTRODUCTION TO JAVA",
                teacher = janib        
                )
            
            Course.objects.create(
                course_id = "IT_603",
                name = "Big Data",
                credit=4,
                semester=6,
                syllabus="Big Data DETAILS",
                description ="INTRODUCTION TO Big Data",
                teacher = janib        
                )
            
            Course.objects.create(
                course_id = "ITT604",
                name = "Computer Networks",
                credit=4,
                semester=6,
                syllabus="Computer Networks Concept",
                description ="Introduction to Computer Networks",
                        
                )
            
            Course.objects.create(
                course_id = "ITT606",
                name = "Computer Graphics",
                credit=4,
                semester=6,
                syllabus="Computer Graphics Concept",
                description ="Introduction to Computer Graphics",
                        
                )
            
            Course.objects.create(
                course_id = "ITT608",
                name = "Artificial Intelligence ",
                credit=3,
                semester=6,
                syllabus="Artificial Intelligence  Concept",
                description ="Introduction to Artificial Intelligence ",
                        
                )
            
            Course.objects.create(
                course_id = "ITT501",
                name = "Computer Organisation & Architecture ",
                credit=4,
                semester=5,
                syllabus="Computer Organisation & Architecture Concept",
                description ="Introduction to Computer Organisation & Architecture  ",
                        
                )
            
            Course.objects.create(
                course_id = "ITT507",
                name = "Microprocessor ",
                credit=3,
                semester=5,
                syllabus="Microprocessor Concept",
                description ="Introduction to Microprocessor",
                        
                )
            

            Course.objects.create(
                course_id = "ITT509",
                name = "Data Communication",
                credit=3,
                semester=5,
                syllabus="Data Communication Concept",
                description ="Introduction to Data Communication",
                        
                )
            

            Course.objects.create(
                course_id = "ITT201",
                name = "Data Structures ",
                credit=4,
                semester=3,
                syllabus="Data Structures  Concept",
                description ="Introduction to Data Structures ",
                        
                )
            
            Course.objects.create(
                course_id = "ITT202",
                name = "Signal and Systems  ",
                credit=3,
                semester=3,
                syllabus="Signal and Systems   Concept",
                description ="Introduction to Signal and Systems  ",
                        
                ) 
            
            Course.objects.create(
                course_id = "ITT203",
                name = " Software Engineering",
                credit=3,
                semester=3,
                syllabus="Software Engineering  Concept",
                description ="Introduction to Software Engineering ",
                        
                )
            
            Course.objects.create(
                course_id = "ITT204",
                name = " Discrete Mathematics and Graph Theory ",
                credit=4,
                semester=3,
                syllabus="Discrete Mathematics and Graph Theory  Concept",
                description ="Introduction to Discrete Mathematics and Graph Theory ",
                        
                )
            
            Course.objects.create(
                course_id = "CST201",
                name = " Object Oriented Programming ",
                credit=4,
                semester=3,
                syllabus="Object Oriented Programming Concept",
                description ="Introduction to  Object Oriented Programming ",
                        
                )
            Course.objects.create(
                course_id = "ITT250",
                name = " Operating Systems  ",
                credit=4,
                semester=4,
                syllabus="Operating Systems  Concept",
                description ="Introduction to  Operating Systems  ",
                        
                )
            
            Course.objects.create(
                course_id = "ITT251",
                name = " Database Management System",
                credit=4,
                semester=4,
                syllabus=" Database Management System Concept",
                description ="Introduction to   Database Management System",
                        
                ) 
            
            Course.objects.create(
                course_id = "ECT251",
                name = " Digital Electronics & Logic Design",
                credit=4,
                semester=4,
                syllabus=" Digital Electronics & Logic Design Concept",
                description ="Introduction to   Digital Electronics & Logic Design",
                        
                ) 
            Course.objects.create(
                course_id = "ECT253",
                name = " Communication System",
                credit=4,
                semester=4,
                syllabus=" Communication System Concept",
                description ="Introduction to   Communication System",
                        
                )
            
            Course.objects.create(
                course_id = "EET258",
                name = " Control System",
                credit=3,
                semester=4,
                syllabus=" Control System Concept",
                description ="Introduction to   Control System",
                        
                )
            
            Course.objects.create(
                course_id = "ITL254",
                name = " Web Programming ",
                credit=2,
                semester=4,
                syllabus=" Web Programming  Concept",
                description ="Introduction to   Web Programming ",
                        
                ) 
            
            Course.objects.create(
                course_id = "EEL100",
                name = " Basic Electrical Engineering ",
                credit=4,
                semester=1,
                syllabus=" Basic Electrical Engineering Concept",
                description ="Introduction to   Basic Electrical Engineering ",
                        
                )
            
            Course.objects.create(
                course_id = "HUL100",
                name = " Basic English and Communication Skills  ",
                credit=3,
                semester=1,
                syllabus=" Basic English and Communication Skills  Concept",
                description ="Introduction to   Basic English and Communication Skills  ",
                        
                )  
            
            Course.objects.create(
                course_id = "CYL100",
                name = " Engineering Chemistry ",
                credit=4,
                semester=1,
                syllabus=" Engineering Chemistry  Concept",
                description ="Introduction to  Engineering Chemistry "
                        
                )
            
            Course.objects.create(
                course_id = "ITL300",
                name = " Computer Programming  ",
                credit=3,
                semester=1,
                syllabus=" Computer Programming   Concept",
                description ="Introduction to  Computer Programming  ",
                        
                )
            
            Course.objects.create(
                course_id = "CIP100",
                name = " Engineering Drawing ",
                credit=4,
                semester=1,
                syllabus=" Engineering Drawing Concept",
                description ="Introduction to  Engineering Drawing ",
                        
                )
            
            Course.objects.create(
                course_id = "MAL100",
                name = " Mathematics I ",
                credit=4,
                semester=1,
                syllabus=" Mathematics I Concept",
                description ="Introduction to  Mathematics I ",
                        
                )
            
            Course.objects.create(
                course_id = "PHL100",
                name = " Engineering Physics",
                credit=4,
                semester=2,
                syllabus=" Engineering Physics Concept",
                description ="Introduction to  Engineering Physics",
                        
                )
            
            Course.objects.create(
                course_id = "HUL101",
                name = " Advanced English Comm.Skills & Organizational Behavior",
                credit=3,
                semester=2,
                syllabus="Advanced English Comm.Skills & Organizational Behavior Concept",
                description ="Introduction to   Advanced English Comm.Skills & Organizational Behavior",
                        
                ) 
            
            Course.objects.create(
                course_id = "CIL100",
                name = " Engineering Mechanics",
                credit=4,
                semester=2,
                syllabus="Engineering Mechanics Concept",
                description ="Introduction to  Engineering Mechanics",
                        
                )
            
            Course.objects.create(
                course_id = "MEL100",
                name = " Elements of Mechanical Engg.",
                credit=3,
                semester=2,
                syllabus="Elements of Mechanical Engg. Concept",
                description ="Introduction to  Elements of Mechanical Engg.",
                        
                )
            
            Course.objects.create(
                course_id = "CYL101",
                name = " Environmental Studies ",
                credit=3,
                semester=2,
                syllabus="Environmental Studies  Concept",
                description ="Introduction to  Environmental Studies ",
                        
                )
            
            Course.objects.create(
                course_id = "MAL101",
                name = " Mathematics II",
                credit=4,
                semester=2,
                syllabus="Mathematics II  Concept",
                description ="Introduction to  Mathematics II ",
                        
                )
            
            Course.objects.create(
                course_id = "WSP100",
                name = " Work shop Practice",
                credit=2,
                semester=2,
                syllabus="Work shop Practice  Technique",
                description ="Introduction to  Work shop Practice ",
                        
                )
            Course.objects.create(
                course_id = "TEST1",
                name = " TEST I",
                credit=4,
                semester=5,
                syllabus="Nothing ",
                description ="Test 1 is created to test the website",
                teacher=rajes
                )
            Course.objects.create(
                course_id = "TEST2",
                name = " TEST II",
                credit=4,
                semester=5,
                syllabus="Nothing ",
                description ="Test 2 is created to test the website",
                teacher=rajes
                )
            Course.objects.create(
                course_id = "TEST3",
                name = " TEST III",
                credit=4,
                semester=5,
                syllabus="Nothing ",
                description ="Test 3 is created to test the website",
                teacher=suhaib
                )
            Course.objects.create(
                course_id = "TEST4",
                name = " TEST IV",
                credit=4,
                semester=5,
                syllabus="Nothing ",
                description ="Test 4 is created to test the website",
                teacher=suhaib
                )
            Course.objects.create(
                course_id = "TEST5",
                name = " TEST V",
                credit=4,
                semester=5,
                syllabus="Nothing ",
                description ="Test 5 is created to test the website",
                teacher=arman
                )
            Holiday.objects.create(
                    date="2023-01-26T15:44:42Z",
                    description="Republic Day"
            )
            Holiday.objects.create(
                date="2023-03-08T15:45:05Z",
                description="Holi"
            )
            Holiday.objects.create(
                date="2023-03-30T15:45:33Z",
                description="Ram Navami"
            )
            Holiday.objects.create(
                date="2023-04-04T15:46:15Z",
                description="Mahavir Jayanti"
            )
            Holiday.objects.create(
                date="2023-04-07T15:46:44Z",
                description="Good Friday"
            )
            Holiday.objects.create(
                date="2023-04-22T15:49:42Z",
                description="Eid-Ul-Fitr"
            )
            Holiday.objects.create(
                date="2023-05-05T15:49:58Z",
                description="Budha Prunima"
            )
            Holiday.objects.create(
                date="2023-06-29T15:50:27Z",
                description="Eid-Ul-Adha"
            )
            Holiday.objects.create(
                date="2023-07-29T15:51:07Z",
                description="Muharram"
            )
            Holiday.objects.create(
                date="2023-08-15T15:51:28Z",
                description="Independence Day"
            )
            Holiday.objects.create(
                date="2023-09-07T15:52:11Z",
                description="Janmashtani"
            )
            Holiday.objects.create(
                date="2023-09-28T15:52:52Z",
                description="Milad-un-Nabi"
            )
            Holiday.objects.create(
                date="2023-10-02T15:53:35Z",
                description="Mahatma Gandhi's Birthday"
            )
            Holiday.objects.create(
                date="2023-10-24T15:54:27Z",
                description="Dussehra"
            )
            Holiday.objects.create(
                date="2023-11-12T15:54:40Z",
                description="Diwali"
            )
            Holiday.objects.create(
                date="2023-11-27T15:55:05Z",
                description="Guru Nanak's Birthday"
            )
            Holiday.objects.create(
                date="2023-12-25T15:55:32Z",
                description="Christmas Day"
            )

            Patent.objects.create(
                patent="Temporary",
                date="NOV 2023",
                number="12345",
                teacher = rajes
            )
            Research.objects.create(
                title="Temporary",
                authors="rajes",
                date="NOV 2023",
                teacher = rajes
            )
            Patent.objects.create(
                patent="Temporary",
                date="NOV 2023",
                number="12346",
                teacher = suhaib
            )
            Research.objects.create(
                title="Temporary",
                authors="suhaib",
                date="NOV 2023",
                teacher = suhaib
            )
            Project.objects.create(
                title="Temporary",
                teacher = suhaib
            )
            TeacherEducation.objects.create(
                degree="12th",
                college="MPML",
                Year= "2021",
                teacher = rajes
            )
            self.stdout.write(self.style.SUCCESS('ALL Course entries created.'))
