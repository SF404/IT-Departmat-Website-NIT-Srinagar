from django.core.management.base import BaseCommand
from IT_DEPARTMENT.models import *
from PublicAPI.models import *

from assets.phd_student import *

class Command(BaseCommand):
    help = 'Add default entries for Course model'
    def handle(self, *args, **kwargs):
            
            File.objects.create(
                name='committee',
                file='files/committee.xlsx',
                type='management'
            )
            File.objects.create(
                name='coordinators',
                file='files/coordinators.xlsx',
                type='management'
            )
            File.objects.create(
                name='faculty_coordinators',
                file='files/Faculty_Details.xlsx',
                type='management'
            )
            File.objects.create(
                name='placement_record',
                file='files/placement_brochure.xlsx',
                type='management'
            )
            File.objects.create(
                name='2015',
                file='files/2015.xlsx',
                type='btech_student_list'
            )
            File.objects.create(
                name='2016',
                file='files/2016.xlsx',
                type='btech_student_list'
            )
            File.objects.create(
                name='2017',
                file='files/2017.xlsx',
                type='btech_student_list'
            )
            File.objects.create(
                name='2018',
                file='files/2018.xlsx',
                type='btech_student_list'
            )
            File.objects.create(
                name='2019',
                file='files/2019.xlsx',
                type='btech_student_list'
            )
            File.objects.create(
                name='2020',
                file='files/2020.xlsx',
                type='btech_student_list'
            )
            File.objects.create(
                name='2021',
                file='files/2021.xlsx',
                type='btech_student_list'
            )
            File.objects.create(
                name='2022',
                file='files/2022.xlsx',
                type='btech_student_list'
            )
            shabir=Teacher.objects.create(        
                name = "Dr. Shabir Ahmad Sofi",
                description = "Associate Professor",
                email = "shabir@nitsri.net",
                phone=94190099711,
                profile_photo="teacher_profile/ShabirSir.jpeg",
                research_field="Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data"
            )
            janib=Teacher.objects.create(
                name = "Dr. Janib ul Bashir",
                description = "HOD and Assistant Professor ",
                email = "janibbashir@nitsri.ac.in",
                phone=8825099229,
                profile_photo="teacher_profile/JanibSir.jpeg",
                research_field="Computer Architecture, Parallel Programming, on-chip security, on-chip networks"
            )
            iqra=Teacher.objects.create(
                name = "Dr. Iqra Altaf Gillani",
                description = "Assistant Professor",
                email = "iqraaltaf@nitsri.ac.in",
                phone=941945399712,
                profile_photo="teacher_profile/IqraMam.jpeg",
                research_field="Data Algorithmics, Probabilistic Analysis of Networks, Distributed Computation, Network and Data Science."
            )
            prabal=Teacher.objects.create(
                name = "Dr. Prabal Verma",
                description = "Assistant Professor",
                email = "prabal.verma@nitsri.net",
                phone=92134305466,
                profile_photo="teacher_profile/PrabalSir.jpeg",
                research_field="Algorithms, Swarm Optimization Algorithms, Machine learning optimization"
            )
            arooj=Teacher.objects.create(       
                name = "Ms. Arooj Nissar",
                description = "Assistant Professor",
                email = "arooj@nitsri.net",
                phone=9018853344,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Digital Image Processing, Network Security, Computer Vision, Medical Image Analysis."
            )
            saniya=Teacher.objects.create(
                name = "Dr. Saniya Zahoor",
                description = "Assistant Professor (Contractual)",
                email = "saniyazahoor@nitsri.ac.in",            
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Internet of Things, Theory of Computation, Web Programming, Management Information Systems. "
            )
            surbhi=Teacher.objects.create(
                name = "Dr. Surbhi Sharma",
                description = "Assistant Professor (Contractual)",
                email = "dsharma@nitsri.ac.in",
                
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Cryptography & Network Security, Software Engineering, Computer Networks, DBMS "
            )
            vippon=Teacher.objects.create(
                name = "Dr. Vippon Preet Kour",
                description = "Assistant Professor (Contractual)",
                email = "preetvippon@gmail.com",
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="AI, IOT, Operating System, Image Processing, Design and Analysis of Algorithms, Machine Learning, Deep Learning."
            )
            
            bazila=Teacher.objects.create(
                name = "Dr. Bazila",
                description = "Guest Faculty",
                email = "hashiabazila@gmail.com",
                phone=9906126663,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Image processing and analysis"
            )
            aksa=Teacher.objects.create(
                name = "Ms. Aksa Urooj",
                description = "Guest Faculty",
                email = "aksaurooj62@gmail.com",
                phone=7006335308,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Programming, Data Structures and Algorithms, Operating Systems, Database Management Systems, Theory of Computation,Compiler Design"
            )
            kalimullah=Teacher.objects.create(
                name = "Mr. Kalimullah Lone",
                description = "Guest Faculty",
                email = "kalimullahlone@gmail.com",
                phone=7051300721,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Internet of Things, Fog Computing, Cloud Computing, Data Science and Big Data"
            )
            
            rajes=Teacher.objects.create(
                name = "Rajes Manna",
                description = "Management team",
                email = "rmrajesofficial.0@gmail.com",
                phone=9149780559,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Tech Team"
            )
            suhaib=Teacher.objects.create(
                name = "Suhaib Salmani",
                description = "Management team",
                email = "suhaibsworkspace@gmail.com",
                phone=8492002286,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Tech Team"
            )
            arman=Teacher.objects.create(
                name = "Arman Ansari",
                description = "Management team",
                email = "armsce856@gmail.com",
                phone=6006280709,
                profile_photo="teacher_profile/AroojMam.jpeg",
                research_field="Tech Team"
            )
            Patent.objects.create(
                title="A Graphics Processor Unit (GPU) System with Photonics based On-chip Network, Janibul Bashir, Smruti R. Sarangi",
                date=" 19 Nov 2019",
                number=201911047168,
                teacher=janib
            )
            Patent.objects.create(
                title="Temporary",
                date="NOV 2023",
                number="12346",
                teacher = suhaib
            )
            Patent.objects.create(
                title="Process and System for Using Unused Optical Power in Photonic On-Chip Networks, Janibul Bashir, Smruti R. Sarangi",
                date=" 18 Feb 2020",
                number=202011006878,
                teacher=janib
            )
            Patent.objects.create(
                title="Temporary",
                date="NOV 2023",
                number="12345",
                teacher = rajes
            )
            Research.objects.create(
                title="Towards a Greener and Fairer Transportation System: A Survey of Route Recommendation Techniques",
                authors="Aqsa Ashraf Makhdomi, Iqra Altaf Gillani",
                url="",
                date="2023",
                teacher=iqra   
            )
            Research.objects.create(
                title="Depression Prediction: A Clinical Questionnaire and Machine Learning Based Approach",
                authors="Sheikh Afaan Farooq, Wajid Ali, Iqra Altaf Gillani",
                url="https://doi.org/10.1109/INCOFT55651.2022.10094365",
                date="2022",
                teacher=iqra   
            )
            Research.objects.create(
                title="A Stochastic Process on a Network with Connections to Laplacian Systems of Equations",
                authors="Amitabha Bagchi, Iqra Altaf Gillani, Pooja Vyavahare",
                url="https://doi.org/10.1017/apr.2021.27",
                date="2022",
                teacher=iqra   
            )
            Research.objects.create(
                title="Crowd Sourcing and Blockchain-Based Incentive Mechanism to Combat Fake News",
                authors="Munaza Farooq, Aqsa Ashraf Makhdomi, Iqra Altaf Gillani",
                url="https://doi.org/10.1007/978-3-030-90087-8_15",
                date="2022",
                teacher=iqra   
            )
            Research.objects.create(
                title="Blockchain-based Incentive Mechanism to Combat Fake News",
                authors="Munaza Farooq, Aqsa Ashraf Makhdomi, Iqra Altaf Gillani",
                url="https://doi.org/10.1007/978-981-16-8059-5_5",
                date="2021",
                teacher=iqra  # Replace 'iqra' with the actual teacher object
            )
            Research.objects.create(
                title="A Queueing Network-Based Distributed Laplacian Solver",
                authors="Iqra Altaf Gillani, Amitabha Bagchi",
                url="https://link.springer.com/article/10.1007/s00453-021-00845-4",
                date="2021",
                teacher=iqra
            )
            Research.objects.create(
                title="Lower bounds for in-network computation of arbitrary functions",
                authors="Iqra Altaf Gillani, Pooja Vyavahare, Amitabha Bagchi",
                date="2021",
                url="https://doi.org/10.1007/s00446-021-00394-7",
                teacher=iqra
            )
            Research.objects.create(
                title="Balance Maximization in Signed Networks via Edge Deletions",
                authors="Kartik Sharma, Iqra Altaf Gillani, Sourav Medya, Sayan Ranu, Amitabha Bagchi",
                date="2021",
                url="https://doi.org/10.1145/3437963.3441778",
                teacher=iqra
            )
            Research.objects.create(
                title="A Queueing Network-Based Distributed Laplacian Solver for Directed Graphs",
                authors="Iqra Altaf Gillani, Amitabha Bagchi",
                date="2021",
                url="https://doi.org/10.1016/j.ipl.2020.106040",
                teacher=iqra
            )
            Research.objects.create(
                title="A Group-to-Group Version of Random Walk Betweenness Centrality",
                authors="Iqra Altaf Gillani, Amitabha Bagchi, Sayan Ranu",
                date="2021",
                url="https://doi.org/10.1145/3430984.3431020",
                teacher=iqra
            )
            Research.objects.create(
                title="A Queueing Network-Based Distributed Laplacian Solver",
                authors="Iqra Altaf Gillani, Amitabha Bagchi",
                date="2020",
                url="https://arxiv.org/abs/1905.04989",
                teacher=iqra
            )           
            Research.objects.create(
                title="Light-weight, Real-time Internet Traffic Classification",
                authors="Zilmarij Iqbal, Rahila Rahim, Iqra Altaf Gillani",
                date="2019",
                url="https://doi.org/10.1109/ANTS47819.2019.9118059",
                teacher=iqra
            )
            
            Research.objects.create(
                title="An Analysis of Various Design Pathways Towards Multi-Terabit Photonic On-Interposer Interconnects",
                authors="VENKATA SAI PRANEETH KAREMPUDI , Janibul Bashir, ISHAN G THAKKAR",
                date="2023",
                url="",
                teacher=janib
            )
            
            Research.objects.create(
                title="Enhancing Microarchitecture Performance through Synergistic Dynamic Branch Prediction and Cache Prefetchings",
                authors="Janibul Bashir, Uzmat un Nisa, Kalimullah Lone",
                date="2023",
                url="",
                teacher=janib
            )    
            Research.objects.create(
                title="Climate Change Parameter Dataset (CCPD): A Benchmark Dataset for Climate Change parameters in Jammu and Kashmir",
                authors="Tajamul Ashraf, Janibul Bashir",
                date="2023",
                url="",
                teacher=janib
            )
            Research.objects.create(
                title="An Integral Computer Vision System for Apple Detection, Classification, and Semantic Segmentation",
                authors="Tajamul Ashraf, Naiyer Abbas, Mohammad Haseeb, Nadeem Yousuf, Janibul Bashir",
                date="2022",
                url="",
                teacher=janib
            ) 
            Research.objects.create(
                title="SecSched: Flexible Scheduling in Secure Processors",
                authors="Shafi, Omais, and Janibul Bashir",
                date="2020",
                url="",
                teacher=janib
            )
            Research.objects.create(
                title="Power Efficient Photonic Network-on-Chip for a Scalable GPU",
                authors="Janibul Bashir, Khushal Sethi, and Smruti R. Sarangi",
                date="2019",
                url="",
                teacher=janib
            )          
            Research.objects.create(
                title="Slotted Electro-Optic Ring Resonator as a Tunable Optical Power Splitter",
                authors="Ghosh, Rajib R., Janib Bashir, Smruti R. Sarangi, Abhijit Das, and Anuj Dhawan",
                date="2019",
                url="",
                teacher=janib
            ) 
            Research.objects.create(
                title="NUPLet: A Photonic-Based Multi-Chip NUCA Architecture",
                authors="Janibul Bashir and Smruti R. Sarangi",
                date="2017",
                url="",
                teacher=janib
            )
            Research.objects.create(
                title="BigBus: A Scalable Optical Interconnect",
                authors="Peter, Eldhose, Janibul Bashir, and Smruti R. Sarangi",
                date="2017",
                url="",
                teacher=janib
            )
            Research.objects.create(
                title="Fog assisted-IoT enabled patient health monitoring in smart homes",
                authors="P Verma, SK Sood",
                date="2018",
                url="https://ieeexplore.ieee.org/abstract/document/8283747",
                teacher=prabal
            )
            Research.objects.create(
                title="A comprehensive framework for student stress monitoring in fog-cloud IoT environment: m-health perspective",
                authors="P Verma, SK Sood",
                date="2019",
                url="https://link.springer.com/article/10.1007/s11517-018-1877-1",
                teacher=prabal
            )
            Research.objects.create(
                title="A data-centric artificial intelligent and extended reality technology in smart healthcare systems",
                authors="PShaikh T.A.,Dar T.R,Sofi S.",
                date="2022",
                url="https://link.springer.com/article/10.1007/s13278-022-00888-7",
                teacher=shabir
            )
            Research.objects.create(
                title="Machine Learning for Smart Agriculture and Precision Farming: Towards Making the Fields Talk",
                authors="Shaikh T.A.,Mir W.A.,Rasool T.,Sofi S.",
                date="2022",
                url="https://link.springer.com/article/10.1007/s11831-022-09761-4",
                teacher=shabir
            )
            Research.objects.create(
                title="Classification of steganalysis techniques: A study",
                authors="Nissar, Arooj, and A. H. Mir.",
                date="2010",
                url="",
                teacher=arooj
            )
            Research.objects.create(
                title="Texture based steganalysis of grayscale images using neural network",
                authors="Nissar, Arooj, and A. H. Mir.",
                date="2013",
                url="",
                teacher=arooj
            )
            
            Research.objects.create(
                title="Temporary",
                authors="rajes",
                date="2023",
                teacher = rajes
            )
            
            Research.objects.create(
                title="Temporary",
                authors="suhaib",
                date="2023",
                teacher = suhaib
            )
            Project.objects.create(
                title="Temporary",
                teacher = suhaib
            )
            TeacherEducation.objects.create(
                degree="12th",
                college="MPML",
                year= "2021",
                teacher = rajes
            )
            TeacherEducation.objects.create(
                degree="B.Tech", 
                college="NIT Srinagar",
                year="2010-14",
                teacher=janib
            )
            TeacherEducation.objects.create(
                degree="Ph.D", 
                college="IIT Delhi",
                year="2016-20",
                teacher=janib
            )
            TeacherEducation.objects.create(
                degree="B.Tech", 
                college="NIT Srinagar",
                year="2011-15",
                teacher=iqra
            )
            TeacherEducation.objects.create(
                degree="Ph.D", 
                college="IIT Delhi",
                year="2016-21",
                teacher=iqra
            )
            TeacherEducation.objects.create(
                degree="B.E", 
                college="REC Srinagar",
                year="0",
                teacher=shabir
            )
            TeacherEducation.objects.create(
                degree="M.Tech", 
                college="NIT Srinagar",
                year="0",
                teacher=shabir
            )
            TeacherEducation.objects.create(
                degree="Ph.D", 
                college="NIT Srinagar",
                year="0",
                teacher=shabir
            )
            TeacherEducation.objects.create(
                degree="Ph.D", 
                college="Guru Nanak Dev University, Amritsar",
                year="2015-19",
                teacher=prabal
            )

            Phd_Student.objects.create(
                enroll="2018PHAITE003",
                name = "Kalimullah Lone",
                description = " ",
                email = "kalimullahlone@gmail.com",
                alumni=True,
                profile_photo="phd_student/kalimullah.jpg",
                research_field="Big Data, Cloud Computing")
            
            Phd_Student.objects.create(
                enroll=" 2018PHAITE004",
                name = "Jehangir Ali",
                description = "",
                alumni=True,
                email = "jehangirnit@gmail.com",
                profile_photo="phd_student/jahangir.jpg",
                research_field="Blockchain and Internet of Things"
            )
            Phd_Student.objects.create(
            enroll="2018PHAITE001",
                name = "Nadeem Yousuf",
                description = "",
                alumni=True,
                email = "njkhan91@gmail.com",
                profile_photo="phd_student/nadeem.jpg",
                research_field="Machine Learning"
            )
            Phd_Student.objects.create(
                enroll="2019PHAITE002",
                name = "Khurshid Bhat",
                description = "",
                alumni=True,
                email = "ksdbhat99@gmail.com",
                profile_photo="phd_student/khurshid.jpg",
                research_field="Artificial Intelligence,Data Science"
            )

            # Student 1: Umar Bashir
            Phd_Student.objects.create(enroll="2022PHAITE005",
                name="Umar Bashir",
                description = "",
                teacher=janib,
                email="umarmir410@gmail.com",
                profile_photo="phd_student/Umarbashir.jpg",
                research_field="Federated Learning"
            )

# Student 2: Aaqib Zahoor
            Phd_Student.objects.create(
                enroll="2022PHAITE003",
                name="Aaqib Zahoor",
                description = "",
                teacher=iqra,
                email="aaqib.zahoor.7865@gmail.com",
                profile_photo="phd_student/Aaqibzahoor.jpg",
                research_field="Temporal Networks"
            )

# Student 3: Shamsul Haq
            Phd_Student.objects.create(enroll="2022PHAITE002",
                name="Shamsul Haq",
                description = "",
                teacher=prabal,
                email="s.haq266@gmail.com",
            profile_photo="phd_student/Shamsulhaq.jpg",
                research_field="Fog-Edge Data Analytics"
            )

# Student 4: Aamir Hilal
            Phd_Student.objects.create(enroll="2022PHAITE004",
                name="Aamir Hilal",
                description = "",
                teacher=shabir,
                email="aamirhilal1@gmail.com",
                profile_photo="phd_student/Aamirhilal.jpg",
                research_field="Deep Visual Learning"
            )

# Student 5: Mir Mohammad Yousuf
            Phd_Student.objects.create(
                enroll="2022PHAITE006",
                name="Mir Mohammad Yousuf",
                description = "",
                teacher=shabir,
                email="Yousuf_2022phaite006@nitsri.ac.in",
                profile_photo="phd_student/Mirmohammadyousuf.jpg",
                research_field="Quantum Software Engineering"
            )

# Student 6: Rabia Latief
            Phd_Student.objects.create(enroll="2023PHAITE002",
                name="Rabia Latief",
                description = "",
                teacher=iqra,
                email="bhatrabiakh@gmail.com",
                profile_photo="phd_student/Rabialatief.jpg",
                research_field="Optimization Techniques"
            )

# Student 7: Anuradha Math
            Phd_Student.objects.create(
                enroll="2023PHAITE001",
                name="Anuradha Math",
                description = "",
                teacher=prabal,
                email="anuradha.math007@gmail.com",
                profile_photo="phd_student/Anuradhamath.jpg",
                research_field="Edge-Fog Computing and Machine Learning"
            )

# Student 8: Rouf Ul Alam Bhat
            Phd_Student.objects.create(enroll="2023PHAITE004",
                name="Rouf Ul Alam Bhat",
                description="",
                teacher=shabir,
                email="roufulalam@uok.edu.in",
                profile_photo="phd_student/RoufUlalamBhat.jpg",
                research_field="Internet of Drones and Balloon Area Network"
            )

# Student 9: Syed Mudasar
            Phd_Student.objects.create(
                enroll="2023PHAITE003",
                name="Syed Mudasar",
                description="",
                teacher=shabir,
                email="Mudasirsyedkirmani@gmail.com",
                profile_photo="phd_student/Syedmudasar.jpg",
                research_field="Deep Learning (HealthCare), Medical AI"
            )

# Student 10: Uzmat Ul Nisa
            Phd_Student.objects.create(enroll="2021PHAITE004",
                name="Uzmat Ul Nisa",
                description="",
                teacher=janib,
                email="uzmatulnisa@gmail.com",
                profile_photo="phd_student/Uzmatulnisa.jpg",
                research_field="Computer Architecture"
            )

# Student 11: Aqsa Ashraf Makhdomi
            Phd_Student.objects.create(
                enroll="2021PHAITE002",
                name="Aqsa Ashraf Makhdomi",
                description="",
                teacher=iqra,
                email="makhdoomiaqsa@gmail.com",
                profile_photo="phd_student/Aqsaashrafmakhdomi.jpg",
                research_field="Optimization"
            )

# Student 12: Bisma Majid
            Phd_Student.objects.create(
                enroll="2021PHAITE006",
                name="Bisma Majid",
                description="",
                teacher=shabir,
                email="Bhatbisma3333@gmail.com",
                profile_photo="phd_student/Bismamajid.jpg",
                research_field="Quantum Machine Learning"
            )
            
            Course.objects.create(
                course_id ="IT801",
                name = "Project",
                credit=12,
                semester=8,
                syllabus="developing a software application.",
                description = "project course is an opportunity designed to immerse students in practical, project-based learning, allowing them to apply their academic knowledge to real-world situations.",       
                )
            
            Course.objects.create(
                course_id ="HSS801",
                name = "Economics & Business Management",
                credit=3,
                semester=8,
                syllabus="The Economics & Business Management (HSS 801) course is designed to provide students with practical training and hands-on experience in the realms of economics and business management.",
                description = "Applying economic principles and theories to real-world business scenarios,Gaining a comprehensive understanding of business management practices.",       
                )
            
            Course.objects.create(
                course_id ="IT802",
                name = "Practical Training",
                credit=2,
                semester=8,
                syllabus="It aims to prepare individuals for real-world situations and equip them with the skills and experience needed to excel in their chosen field.",
                description = "practical training is an educational approach that immerses individuals in real-world experiences, enabling them to apply theoretical knowledge and develop practical skills.",       
                )



            Course.objects.create(
                course_id ="IT701",
                name = "Wireless & Mobile Communication",
                credit=4,
                semester=7,
                syllabus="Introduction-Evolution of mobile radio communications",
                description = "Networks- Integrated Services Digital Network (ISDN)",
                       
                )
            
            Course.objects.create(
                course_id = "IT703",
                name = "Information Security",
                credit=3,
                semester=7,
                syllabus="Balancing Information Security and Access",
                description ="Introduction to the Concepts of Security",
                       
                )
             
            Course.objects.create(
                course_id = "IT705",
                name = "Image Processing",
                credit=3,
                semester=7,
                syllabus="IMAGE ENHANCEMENT IN THE SPATIAL DOMAIN",
                        
                )
            
            Course.objects.create(
                course_id = "IT707",
                name = "Cloud Computing",
                credit=4,
                semester=7,
                syllabus="CLOUD COMPUTING SECURITY CHALLENGES:",
                description ="INTRODUCTION TO CLOUD COMPUTING",
                       
                )
            
            Course.objects.create(
                course_id = "IT601",
                name = "Java Programming",
                credit=3,
                semester=6,
                syllabus="Java Programming DETAILS",
                       
                )
            
            Course.objects.create(
                course_id = "IT603",
                name = "Big Data",
                credit=4,
                semester=6,
                syllabus="Big Data DETAILS",
                description ="INTRODUCTION TO Big Data",
                teacher = prabal        
                )
            
            Course.objects.create(
                course_id = "ITT604",
                name = "Computer Networks",
                credit=4,
                semester=6,
                syllabus="Computer Networks Concept",
                description ="Introduction to Computer Networks",
                teacher = iqra        
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
                teacher = shabir      
                )
            
            Course.objects.create(
                course_id = "ITT303",
                name = "Computer Organisation & Architecture",
                credit=4,
                semester=5,
                syllabus="Computer Organisation & Architecture Concept",
                description ="Introduction to Computer Organisation & Architecture",
                teacher = janib        
                )
            
            Course.objects.create(
                course_id = "ITT302",
                name = "Microprocessor ",
                credit=4,
                semester=5,
                syllabus="Microprocessor Concept",
                description ="Introduction to Microprocessor",
                 teacher = vippon       
                )
            

            Course.objects.create(
                course_id = "ITT305",
                name = "Data Communication",
                credit=4,
                semester=5,
                syllabus="Data Communication Concept",
                description ="Introduction to Data Communication",
                  teacher = iqra      
                )
            Course.objects.create(
                course_id = "ITT301",
                name = "Design & Analysis of Algorithms",
                credit=4,
                semester=5,
                syllabus="Design & Analysis of Algorithms Concept",
                description ="Introduction to Design & Analysis of Algorithms",
                teacher = prabal        
                )
            Course.objects.create(
                course_id = "ITT304",
                name = "Theory of Computation",
                credit=4,
                semester=5,
                syllabus="Theory of Computation Concept",
                description ="Introduction to Theory of Computation",
                teacher = saniya        
                )
            Course.objects.create(
                course_id = "MAT301",
                name = "Introduction to Probability and Statistics",
                credit=3,
                semester=5,
                syllabus="Theory of Probability and Statistics",
                description ="Introduction to Probability and Statistics",
                        
                )
            Course.objects.create(
                course_id = "ITT201",
                name = "Data Structures",
                credit=4,
                semester=3,
                syllabus="Data Structures  Concept",
                description ="Introduction to Data Structures",
                 teacher = prabal       
                )
            Course.objects.create(
                course_id = "ECT207",
                name = "Electronics",
                credit=4,
                semester=3,
                syllabus="Electronics  Concept",
                description ="Introduction to Electronics",      
                )
            Course.objects.create(
                course_id = "ITT202",
                name = "Signal and Systems ",
                credit=3,
                semester=3,
                syllabus="Signal and Systems   Concept",
                description ="Introduction to Signal and Systems ",
                        
                ) 
            
            Course.objects.create(
                course_id = "ITT203",
                name = " Software Engineering",
                credit=3,
                semester=3,
                syllabus="Software Engineering  Concept",
                description ="Introduction to Software Engineering",
                        
                )
            
            Course.objects.create(
                course_id = "ITT204",
                name = " Discrete Mathematics and Graph Theory ",
                credit=4,
                semester=3,
                syllabus="Discrete Mathematics and Graph Theory  Concept",
                description ="Introduction to Discrete Mathematics and Graph Theory",
                  teacher = iqra      
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
                 teacher = janib       
                )
            
            Course.objects.create(
                course_id = "ITT251",
                name = " Database Management System",
                credit=4,
                semester=4,
                syllabus=" Database Management System Concept",
                description ="Introduction to   Database Management System",
                  teacher = prabal      
                ) 
            
            Course.objects.create(
                course_id = "ECT257",
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
                   teacher = saniya     
                ) 
            
            Course.objects.create(
                course_id = "EET101",
                name = " Basic Electrical Engineering ",
                credit=3,
                semester=2,
                syllabus=" Basic Electrical Engineering Concept",
                description ="Introduction to   Basic Electrical Engineering ",
                        
                )
            
            Course.objects.create(
                course_id = "HST101",
                name = " Basic English and Communication Skills  ",
                credit=3,
                semester=1,
                syllabus=" Basic English and Communication Skills  Concept",
                description ="Introduction to   Basic English and Communication Skills  ",
                        
                )  
            
            Course.objects.create(
                course_id = "CHT101",
                name = " Engineering Chemistry ",
                credit=3,
                semester=2,
                syllabus=" Engineering Chemistry  Concept",
                description ="Introduction to  Engineering Chemistry "
                        
                )
            
            Course.objects.create(
                course_id = "ITT101",
                name = " Computer Programming  ",
                credit=3,
                semester=2,
                syllabus=" Computer Programming   Concept",
                description ="Introduction to  Computer Programming  ",
                        
                )
            
            Course.objects.create(
                course_id = "CVT102",
                name = " Engineering Drawing ",
                credit=3,
                semester=2,
                syllabus=" Engineering Drawing Concept",
                description ="Introduction to  Engineering Drawing ",
                        
                )
            
            Course.objects.create(
                course_id = "MAT101",
                name = " Mathematics I ",
                credit=3,
                semester=1,
                syllabus=" Mathematics I Concept",
                description ="Introduction to  Mathematics I ",
                        
                )
            
            Course.objects.create(
                course_id = "PHT101",
                name = " Engineering Physics",
                credit=3,
                semester=1,
                syllabus=" Engineering Physics Concept",
                description ="Introduction to  Engineering Physics",
                        
                )
            
            Course.objects.create(
                course_id = "HST102",
                name = " Advanced English Comm.Skills & Organizational Behavior",
                credit=3,
                semester=2,
                syllabus="Advanced English Comm.Skills & Organizational Behavior Concept",
                description ="Introduction to   Advanced English Comm.Skills & Organizational Behavior",
                        
                ) 
            
            Course.objects.create(
                course_id = "CVT101",
                name = " Engineering Mechanics",
                credit=3,
                semester=1,
                syllabus="Engineering Mechanics Concept",
                description ="Introduction to  Engineering Mechanics",
                        
                )
            
            Course.objects.create(
                course_id = "MET101",
                name = " Elements of Mechanical Engg.",
                credit=3,
                semester=1,
                syllabus="Elements of Mechanical Engg. Concept",
                description ="Introduction to  Elements of Mechanical Engg.",
                        
                )
            
            Course.objects.create(
                course_id = "CHT102",
                name = " Environmental Studies ",
                credit=3,
                semester=1,
                syllabus="Environmental Studies  Concept",
                description ="Introduction to  Environmental Studies ",
                        
                )
            
            Course.objects.create(
                course_id = "MAT102",
                name = " Mathematics II",
                credit=3,
                semester=2,
                syllabus="Mathematics II  Concept",
                description ="Introduction to  Mathematics II ",
                        
                )
            
            Course.objects.create(
                course_id = "WSP100",
                name = " Work shop Practice",
                credit=2,
                semester=1,
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
            self.stdout.write(self.style.SUCCESS('ALL Course entries created.'))