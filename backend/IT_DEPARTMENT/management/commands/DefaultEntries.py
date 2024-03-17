from django.core.management.base import BaseCommand
from IT_DEPARTMENT.models import *
from PublicAPI.models import *

from assets.phd_student import *

class Command(BaseCommand):
    help='Add default entries for Course model'
    def handle(self, *args, **kwargs):
            Gallery.objects.create(
                image="gallery/1.jpg"
            )
            Gallery.objects.create(
                image="gallery/2.webp"
            )
            Gallery.objects.create(
                image="gallery/3.jpg"
            )
            Gallery.objects.create(
                image="gallery/4.webp"
            )
            Gallery.objects.create(
                image="gallery/5.jpg"
            )
            Gallery.objects.create(
                image="gallery/6.webp"
            )
            Gallery.objects.create(
                image="gallery/7.webp"
            )
            Gallery.objects.create(
                image="gallery/8.webp"
            )
            Gallery.objects.create(
                image="gallery/9.webp"
            )
            Gallery.objects.create(
                image="gallery/10.webp"
            )
            Gallery.objects.create(
                image="gallery/11.jpg"
            )
            Gallery.objects.create(
                image="gallery/12.webp"
            )
            Gallery.objects.create(
                image="gallery/13.webp"
            )
            File.objects.create(
                name='4th_A_2024',
                file='files/TT_2024_4th_A.pdf',
                type='timetable'
            )
            File.objects.create(
                name='4th_B_2024',
                file='files/TT_2024_4th_B.pdf',
                type='timetable'
            )
            File.objects.create(
                name='6th_A_2024',
                file='files/TT_2024_6th_A.pdf',
                type='timetable'
            )
            File.objects.create(
                name='6th_B_2024',
                file='files/TT_2024_6th_B.pdf',
                type='timetable'
            )
            File.objects.create(
                name='8th_2024',
                file='files/TT_2024_8th.pdf',
                type='timetable'
            )
            File.objects.create(
                name='all_sem',
                file='files/IT_Scheme_2019.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='1st_sem',
                file='files/1st_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='2nd_sem',
                file='files/1st_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='3rd_sem',
                file='files/3rd_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='4th_sem',
                file='files/4th_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='5th_sem',
                file='files/5th_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='6th_sem',
                file='files/6th_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='7th_sem',
                file='files/7th_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='8th_sem',
                file='files/8th_sem_IT_Syllabus.pdf',
                type='syllabus'
            )
            File.objects.create(
                name='committee',
                file='files/committee.xlsx',
                type='management'
            )
            File.objects.create(
                name='staff',
                file='files/staf.xlsx',
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
                name ="Dr. Shabir Ahmad Sofi",
                description ="Associate Professor",
                email ="shabir@nitsri.net",
                phone=94190099711,
                profile_photo="teacher_profile/ShabirSir.jpeg",
                research_field="Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data"
            )
            janib=Teacher.objects.create(
                name ="Dr. Janib ul Bashir",
                description ="HOD and Assistant Professor",
                email ="janibbashir@nitsri.ac.in",
                phone=8825099229,
                profile_photo="teacher_profile/JanibSir.jpeg",
                research_field="Computer Architecture, Parallel Programming, on-chip security, on-chip networks"
            )
            iqra=Teacher.objects.create(
                name ="Dr. Iqra Altaf Gillani",
                description ="Assistant Professor",
                email ="iqraaltaf@nitsri.ac.in",
                phone=941945399712,
                profile_photo="teacher_profile/IqraMam.jpeg",
                research_field="Data Algorithmics, Probabilistic Analysis of Networks, Distributed Computation, Network and Data Science."
            )
            prabal=Teacher.objects.create(
                name ="Dr. Prabal Verma",
                description ="Assistant Professor",
                email ="prabal.verma@nitsri.net",
                phone=92134305466,
                profile_photo="teacher_profile/PrabalSir.jpeg",
                research_field="Algorithms, Swarm Optimization Algorithms, Machine learning optimization"
            )
            arooj=Teacher.objects.create(       
                name ="Ms. Arooj Nissar",
                description ="Assistant Professor",
                email ="arooj@nitsri.net",
                phone=9018853344,
                profile_photo="teacher_profile/default.jpg",
                research_field="Digital Image Processing, Network Security, Computer Vision, Medical Image Analysis."
            )
            saniya=Teacher.objects.create(
                name ="Dr. Saniya Zahoor",
                description ="Assistant Professor (Contractual)",
                email ="saniyazahoor@nitsri.ac.in",            
                profile_photo="teacher_profile/default.jpg",
                research_field="Internet of Things, Theory of Computation, Web Programming, Management Information Systems."
            )
            surbhi=Teacher.objects.create(
                name ="Dr. Surbhi Sharma",
                description ="Assistant Professor (Contractual)",
                email ="dsharma@nitsri.ac.in",
                
                profile_photo="teacher_profile/default.jpg",
                research_field="Cryptography & Network Security, Software Engineering, Computer Networks, DBMS"
            )
            vippon=Teacher.objects.create(
                name ="Dr. Vippon Preet Kour",
                description ="Assistant Professor (Contractual)",
                email ="preetvippon@gmail.com",
                profile_photo="teacher_profile/default.jpg",
                research_field="AI, IOT, Operating System, Image Processing, Design and Analysis of Algorithms, Machine Learning, Deep Learning."
            )
            
            bazila=Teacher.objects.create(
                name ="Dr. Bazila",
                description ="Guest Faculty",
                email ="hashiabazila@gmail.com",
                phone=9906126663,
                profile_photo="teacher_profile/default.jpg",
                research_field="Image processing and analysis"
            )
            aksa=Teacher.objects.create(
                name ="Ms. Aksa Urooj",
                description ="Guest Faculty",
                email ="aksaurooj62@gmail.com",
                phone=7006335308,
                profile_photo="teacher_profile/default.jpg",
                research_field="Programming, Data Structures and Algorithms, Operating Systems, Database Management Systems, Theory of Computation,Compiler Design"
            )
            kalimullah=Teacher.objects.create(
                name ="Mr. Kalimullah Lone",
                description ="Guest Faculty",
                email ="kalimullahlone@gmail.com",
                phone=7051300721,
                profile_photo="teacher_profile/default.jpg",
                research_field="Internet of Things, Fog Computing, Cloud Computing, Data Science and Big Data"
            )
            Patent.objects.create(
                title="A Graphics Processor Unit (GPU) System with Photonics based On-chip Network, Janibul Bashir, Smruti R. Sarangi",
                date="19 Nov 2019",
                number=201911047168,
                teacher=janib
            )
            Patent.objects.create(
                title="Process and System for Using Unused Optical Power in Photonic On-Chip Networks, Janibul Bashir, Smruti R. Sarangi",
                date="18 Feb 2020",
                number=202011006878,
                teacher=janib
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
                name ="Kalimullah Lone",
                description ="",
                email ="kalimullahlone@gmail.com",
                alumni=True,
                profile_photo="phd_student/kalimullah.jpg",
                research_field="Big Data, Cloud Computing")
            
            Phd_Student.objects.create(
                enroll="2018PHAITE004",
                name ="Jehangir Ali",
                description ="",
                alumni=True,
                email ="jehangirnit@gmail.com",
                profile_photo="phd_student/jahangir.jpg",
                research_field="Blockchain and Internet of Things"
            )
            Phd_Student.objects.create(
                enroll="2018PHAITE001",
                name ="Nadeem Yousuf",
                description ="",
                alumni=True,
                email ="njkhan91@gmail.com",
                profile_photo="phd_student/nadeem.jpg",
                research_field="Machine Learning"
            )
            Phd_Student.objects.create(
                enroll="2019PHAITE002",
                name ="Khurshid Bhat",
                description ="",
                email ="ksdbhat99@gmail.com",
                profile_photo="phd_student/khurshid.jpg",
                research_field="Artificial Intelligence,Data Science"
            )

            Phd_Student.objects.create(enroll="2022PHAITE005",
                name="Umar Bashir",
                description ="",
                teacher=janib,
                email="umarmir410@gmail.com",
                profile_photo="phd_student/Umarbashir.jpg",
                research_field="Federated Learning"
            )

            Phd_Student.objects.create(
                enroll="2022PHAITE003",
                name="Aaqib Zahoor",
                description ="",
                teacher=iqra,
                email="aaqib.zahoor.7865@gmail.com",
                profile_photo="phd_student/Aaqibzahoor.jpg",
                research_field="Temporal Networks"
            )

            Phd_Student.objects.create(enroll="2022PHAITE002",
                name="Shamsul Haq",
                description ="",
                teacher=prabal,
                email="s.haq266@gmail.com",
                profile_photo="phd_student/Shamsulhaq.jpg",
                research_field="Fog-Edge Data Analytics"
            )

            Phd_Student.objects.create(enroll="2022PHAITE004",
                name="Aamir Hilal",
                description ="",
                teacher=shabir,
                email="aamirhilal1@gmail.com",
                profile_photo="phd_student/Aamirhilal.jpg",
                research_field="Deep Visual Learning"
            )
            Phd_Student.objects.create(
                enroll="2022PHAITE006",
                name="Mir Mohammad Yousuf",
                description ="",
                teacher=shabir,
                email="Yousuf_2022phaite006@nitsri.ac.in",
                profile_photo="phd_student/Mirmohammadyousuf.jpg",
                research_field="Quantum Software Engineering"
            )
            Phd_Student.objects.create(enroll="2023PHAITE002",
                name="Rabia Latief",
                description ="",
                teacher=iqra,
                email="bhatrabiakh@gmail.com",
                profile_photo="phd_student/Rabialatief.jpg",
                research_field="Optimization Techniques"
            )
            Phd_Student.objects.create(
                enroll="2023PHAITE001",
                name="Anuradha Math",
                description ="",
                teacher=prabal,
                email="anuradha.math007@gmail.com",
                profile_photo="phd_student/Anuradhamath.jpg",
                research_field="Edge-Fog Computing and Machine Learning"
            )
            Phd_Student.objects.create(enroll="2023PHAITE004",
                name="Rouf Ul Alam Bhat",
                description="",
                teacher=shabir,
                email="roufulalam@uok.edu.in",
                profile_photo="phd_student/RoufUlalamBhat.jpg",
                research_field="Internet of Drones and Balloon Area Network"
            )
            Phd_Student.objects.create(
                enroll="2023PHAITE003",
                name="Syed Mudasar",
                description="",
                teacher=shabir,
                email="Mudasirsyedkirmani@gmail.com",
                profile_photo="phd_student/Syedmudasar.jpg",
                research_field="Deep Learning (HealthCare), Medical AI"
            )
            Phd_Student.objects.create(enroll="2021PHAITE004",
                name="Uzmat Ul Nisa",
                description="",
                teacher=janib,
                email="uzmatulnisa@gmail.com",
                profile_photo="phd_student/Uzmatulnisa.jpg",
                research_field="Computer Architecture"
            )
            Phd_Student.objects.create(
                enroll="2021PHAITE002",
                name="Aqsa Ashraf Makhdomi",
                description="",
                teacher=iqra,
                email="makhdoomiaqsa@gmail.com",
                profile_photo="phd_student/Aqsaashrafmakhdomi.jpg",
                research_field="Optimization"
            )
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
                course_id ="ITP451",
                name ="Project",
                credit=12,
                semester=8,
                syllabus="developing a software application.",
                description ="The project serves as a culmination of students' academic learning, where they apply their knowledge and skills to solve real-world problems or develop innovative solutions in the field of information technology. Students typically choose a project topic based on their interests, industry trends, or emerging technologies. They work collaboratively in teams or individually to plan, design, implement, and present their projects. The project provides an opportunity for students to showcase their abilities, demonstrate their proficiency in various IT technologies, and prepare for their transition into the workforce or further studies.",       
                )
            
            Course.objects.create(
                course_id ="HST450",
                name ="Economics & Business Management",
                credit=3,
                semester=8,
                syllabus="The Economics & Business Management (HSS 801) course is designed to provide students with practical training and hands-on experience in the realms of economics and business management.",
                description ="Economics and business management encompass the study of economic principles, theories, and practices within the context of business organizations and markets. Students in this field learn about topics such as microeconomics, macroeconomics, business strategy, finance, marketing, operations management, and organizational behavior. They gain a deep understanding of how economic factors influence business decision-making, market behavior, and overall organizational performance. Through case studies, research projects, and practical applications, students develop analytical, critical thinking, and problem-solving skills essential for success in the dynamic world of economics and business management.",       
                )
            
            Course.objects.create(
                course_id ="ITT450",
                name ="Machine Learning",
                credit=2,
                semester=8,
                syllabus=" Machine Learning",
                description ="Machine learning is a branch of artificial intelligence that focuses on developing algorithms and models that enable computers to learn from and make predictions or decisions based on data. In this field, students explore various machine learning techniques, such as supervised learning, unsupervised learning, and reinforcement learning. They learn how to preprocess data, select appropriate algorithms, train models, and evaluate their performance. Through hands-on projects and real-world applications, students gain practical experience in solving complex problems and extracting valuable insights from data using machine learning techniques.",       
                )
            Course.objects.create(
                course_id ="IT701",
                name ="Wireless & Mobile Communication",
                credit=4,
                semester=7,
                syllabus="Introduction-Evolution of mobile radio communications",
                description ="This course introduces students to the essential principles of wireless communication, addressing the growing need for connectivity in mobile environments. Students explore cellular concepts, including capacity design and interference elimination methods, and study various access techniques such as FDMA and TDMA. Additionally, the course covers wireless networks, protocols like WAP, and standards like GSM and CDMA. Students also delve into security issues in wireless systems and learn methods to enhance security effectively.",      
                )
            
            Course.objects.create(
                course_id ="IT703",
                name ="Information Security",
                credit=3,
                semester=7,
                syllabus="Balancing Information Security and Access",
                description ="This course provides a comprehensive understanding of information security, covering its history, significance, and various approaches. Students learn about encryption and decryption techniques, including symmetric and asymmetric encryption methods. Additionally, they study technical aspects and implementation strategies of encryption, achieving authentication using keys. Through practical exercises, students develop skills in ensuring data confidentiality and integrity.",                      
                )             
            Course.objects.create(
                course_id ="IT705",
                name ="Image Processing",
                credit=3,
                semester=7,
                syllabus="Image Processing",
                description="In this course, students explore the fundamentals of digital images and the image processing workflow. They learn about image acquisition processes and develop applications for image processing. The course covers techniques for image enhancement, including color image models and image degradation causes. Students also study image compression techniques, segmentation, and morphological image processing methods to address various image processing challenges.",
                
                )
            
            Course.objects.create(
                course_id ="IT707",
                name ="Cloud Computing",
                credit=4,
                semester=7,
                syllabus="CLOUD COMPUTING SECURITY CHALLENGES:",
                description ="This course introduces students to basic concepts of cloud computing technologies and different cloud models such as IaaS, PaaS, and SaaS. Students gain an understanding of big data analysis tools and techniques and delve into web services, cloud virtualization, and data management principles. Additionally, the course covers multi-tenant software, cloud file systems, security challenges, and setting up cloud environments. Students become familiar with integrating tools and addressing cloud computing issues effectively.",  
                teacher=prabal                     
                )
            
            Course.objects.create(
                course_id ="ITT354",
                name ="Object-Oriented Programming II with Java",
                credit=3,
                semester=6,
                syllabus="Object-Oriented Programming II with Java",
                description="This course covers various aspects of Java programming and object-oriented programming (OOP) principles. Students learn about JVM architecture, JIT compilation, abstraction, polymorphism, and Java classes. They explore exception handling, string manipulation, concurrent programming, and file handling. Additionally, students gain familiarity with graphical components, event handling, and data validation techniques for building interactive Java applications.",
                teacher=aksa
                )
            
            Course.objects.create(
                course_id ="IT603",
                name ="Big Data",
                credit=4,
                semester=6,
                syllabus="Big Data DETAILS",
                description ="This course introduces students to big data concepts, platforms, and use cases, emphasizing Apache Hadoop and HDFS. Students learn about data sciences, the data lifecycle, and supervised and unsupervised learning algorithms. They also explore tools and technologies for unstructured data analytics and gain hands-on experience implementing machine learning algorithms using Python.",
                teacher=prabal        
                )
            
            Course.objects.create(
                course_id ="ITT604",
                name ="Computer Networks",
                credit=4,
                semester=6,
                syllabus="Computer Networks Concept",
                description ="This course provides a foundational understanding of networking principles, emphasizing the importance of networking in both general and computer-specific contexts. Students explore the TCP/IP reference model, delving into error, flow, and access control strategies essential for efficient data transmission. Additionally, students learn about IPV4 addressing and strategies for transitioning to IPV6, including subnetting, VLSM, and NAT techniques. Routing algorithms and mechanisms for connection establishment, termination, and congestion reduction are also covered. Finally, students gain insight into various application layer services integral to modern networking systems.",
                teacher=iqra        
                )
            
            Course.objects.create(
                course_id ="ITT606",
                name ="Computer Graphics",
                credit=4,
                semester=6,
                syllabus="Computer Graphics Concept",
                description ="Students gain a comprehensive understanding of computer graphics fundamentals, including different graphics systems and applications. They learn about scan conversion of basic geometrical primitives, geometric transformations, scene extraction, and clipping methods. Additionally, students explore projections, visible surface detection techniques, and rendering principles for displaying 3D scenes on 2D screens. The course also covers illumination models and their role in naturalizing rendered scenes.",
                teacher=arooj,
                )
            
            Course.objects.create(
                course_id ="ITT608",
                name ="Artificial Intelligence",
                credit=3,
                semester=6,
                syllabus="Artificial Intelligence  Concept",
                description ="This course offers insights into the historical development of artificial intelligence (AI) and its core principles. Students learn about AI problem-solving techniques and their application in inference, perception, knowledge representation, and learning. The course explores AI applications such as intelligent agents, expert systems, and machine learning models, along with AI development tools and techniques crucial for implementing AI solutions effectively.",
                teacher=shabir      
                )
            
            Course.objects.create(
                course_id ="ITT303",
                name ="Computer Organisation & Architecture",
                credit=4,
                semester=5,
                syllabus="Computer Organisation & Architecture Concept",
                description ="This course introduces students to computer architecture fundamentals, including data representation, computer arithmetic, and instruction set architecture. Students explore the interaction between hardware and software, major components of modern microprocessors, and techniques to enhance processor performance and memory efficiency. By studying memory hierarchy and hardware/software interfaces, students gain insights into designing efficient computer systems capable of meeting diverse computational requirements.",
                teacher=janib        
                )
            
            Course.objects.create(
                course_id ="ITT302",
                name ="Microprocessor",
                credit=4,
                semester=5,
                syllabus="Microprocessor Concept",
                description ="This course familiarizes students with the architecture, organization, and instruction set of microprocessors like 8085 and 8086. Students learn to write assembly language programs, understand the interfacing of peripherals, and analyze data transfer mechanisms through serial and parallel ports. Through practical exercises, students gain proficiency in programming stacks, delays, counters, and subroutines, enabling them to implement various functionalities using microprocessors. By the end of the course, students develop a deep understanding of microprocessor architecture and its applications in real-world systems.",
                teacher=vippon       
                )
            Course.objects.create(
                course_id ="ITT305",
                name ="Data Communication",
                credit=4,
                semester=5,
                syllabus="Data Communication Concept",
                description ="This course covers the fundamentals of data and signal transmission, OSI and TCP/IP reference models, network topologies, and transmission media. Students explore analog and digital conversion techniques, physical and data link layer protocols, and various networking technologies. By understanding data communication principles and technologies, students develop the knowledge and skills necessary for designing and managing efficient communication networks.",
                teacher=iqra      
                )
            Course.objects.create(
                course_id ="ITT301",
                name ="Design & Analysis of Algorithms",
                credit=4,
                semester=5,
                syllabus="Design & Analysis of Algorithms Concept",
                description ="This course provides an introduction to algorithm efficiency and asymptotic notations, enabling students to analyze and understand algorithmic performance. Students explore various divide and conquer, greedy, and dynamic programming algorithms, gaining insight into their design principles and applications. Additionally, the course covers graph searching and traversal algorithms, offering students a comprehensive understanding of computational complexity measures and their implications. By the end of the course, students develop the ability to assess algorithmic efficiency, select appropriate algorithms for different problem domains, and analyze their computational complexity effectively.",
                teacher=prabal        
                )
            Course.objects.create(
                course_id ="ITT304",
                name ="Theory of Computation",
                credit=4,
                semester=5,
                syllabus="Theory of Computation Concept",
                description ="This course delves into the theoretical foundations of computation, exploring computational models, finite automata, regular expressions, and context-free grammars. Students analyze algorithmic complexity, understand problem solvability limits, and explore computational hardness concepts like P vs NP. By examining algorithms' correctness, properties, and limitations, students develop critical thinking skills essential for tackling complex computational problems.",
                teacher=saniya        
                )
            Course.objects.create(
                course_id ="MAT301",
                name ="Introduction to Probability and Statistics",
                credit=3,
                semester=5,
                syllabus="Theory of Probability and Statistics",
                description ="This course introduces students to the basic concepts of probability, random variables, and probability distributions. Students explore different probability distributions, joint probability distributions, correlation coefficients, and regression analysis techniques. Through practical applications, students learn to compute point estimations, construct confidence intervals, and understand sampling distributions. By mastering probability and statistical concepts, students acquire analytical skills essential for data analysis and decision-making in diverse fields.",
                        
                )
            Course.objects.create(
                course_id ="ITT201",
                name ="Data Structures",
                credit=4,
                semester=3,
                syllabus="Data Structures  Concept",
                description ="This course covers fundamental concepts in data structures essential for effective programming. Students will learn about basic structures like arrays, strings, and linked lists, along with their applications in storing and manipulating data. Linear data structures such as stacks and queues will be explored, highlighting their distinct functionalities and differences. The course also delves into hash functions, collisions, and resolution methods, crucial for efficient data storage and retrieval. Additionally, students will study advanced structures like trees, heaps, and graphs, gaining insight into their basic operations and practical implementations. Techniques for problem-solving, including sorting and searching algorithms, will also be discussed, equipping students with valuable skills for tackling real-world programming challenges.",
                teacher=prabal       
                )
            Course.objects.create(
                course_id ="ECT207",
                name ="Electronics",
                credit=4,
                semester=3,
                syllabus="Electronics  Concept",
                description ="This course provides an introduction to the principles and components of electronics. Students will learn about passive components, their types, specifications, and common values, essential for circuit design. The course will cover the working principles and characteristics of diodes, transistors, MOSFETs, and various measuring instruments used in electronic circuits. Special focus will be given to the applications of diodes in circuits and rectifiers, enhancing students' understanding of electronic device functionality and circuit design principles.",      
                )
            Course.objects.create(
                course_id ="ITT202",
                name ="Signal and Systems",
                credit=3,
                semester=3,
                syllabus="Signal and Systems   Concept",
                description ="This course focuses on understanding the fundamental concepts and operations related to signals and systems. Students will learn about signal classification, properties, and basic operations, providing a foundation for analyzing signal behavior. The course will cover the classification and properties of systems, with a specific focus on Linear Time-Invariant (LTI) systems. Students will explore Fourier and Laplace transforms of signals, understanding their properties and applications in signal analysis. Additionally, probability distribution functions and density functions will be studied in the context of signals and systems, along with autocorrelation and cross-correlation functions and their applications in analyzing noise in LTI systems. Through theoretical concepts and practical examples, students will develop a strong understanding of signals and systems theory and its applications.",
                        
                ) 
            
            Course.objects.create(
                course_id ="ITT203",
                name ="Software Engineering",
                credit=3,
                semester=3,
                syllabus="Software Engineering  Concept",
                description ="In this course, students will learn classical and contemporary software engineering methods, enabling them to choose and adapt suitable approaches for diverse projects. They will gain proficiency in applying software engineering practices throughout the entire system lifecycle, covering requirements engineering, analysis, prototyping, design, implementation, and testing. Additionally, emphasis is placed on enhancing students' written and oral communication skills, enabling them to effectively prepare and publish project documentation. Moreover, students will develop an understanding of ethical and professional considerations essential in the software engineering field.",
                teacher=surbhi
                )
            
            Course.objects.create(
                course_id ="ITT204",
                name ="Discrete Mathematics and Graph Theory",
                credit=4,
                semester=3,
                syllabus="Discrete Mathematics and Graph Theory  Concept",
                description ="This course introduces students to discrete structures such as sets, relations, and lattices. They will study basic operations of Propositional logic and Boolean Algebra and explore various proof techniques. Furthermore, students will gain insight into Graph theory, learning how it can be used to visualize and simplify problems. Additionally, the course covers properties of algebraic systems like Rings, Monoids, and Groups, providing students with a solid foundation in mathematical concepts relevant to computer science.",
                teacher=iqra      
                )
            
            Course.objects.create(
                course_id ="CST201",
                name ="Object Oriented Programming",
                credit=4,
                semester=3,
                syllabus="Object Oriented Programming Concept",
                description ="This course delves into the principles of Object-Oriented Programming (OOP) using C++. Students will grasp key OOP concepts including data abstraction, encapsulation, inheritance, dynamic binding, and polymorphism. They will learn to utilize the object-oriented paradigm in program design, laying a strong foundation for advanced programming techniques. Through practical exercises, students will gain programming insight using OOP constructs, enhancing their proficiency in C++ programming and software development.",
                
                )
            Course.objects.create(
                course_id ="ITT250",
                name ="Operating Systems",
                credit=4,
                semester=4,
                syllabus="Operating Systems  Concept",
                description ="This course covers the fundamental functions and processes of operating systems, providing students with insights into their management and coordination. Students explore interprocess communication and process control mechanisms, along with techniques for detecting, preventing, and avoiding deadlocks. The course also delves into process scheduling algorithms, memory management, and I/O device management, crucial for optimizing system performance and resource utilization.",
                teacher=janib       
                )
            
            Course.objects.create(
                course_id ="ITT251",
                name ="Database Management System",
                credit=4,
                semester=4,
                syllabus="Database Management System Concept",
                description ="Students in this course learn about the basic concepts and various data models used in database design. They apply relational database theory to describe relational algebra expressions and SQL queries. The course emphasizes normalization, functional dependency, and the implementation of transactions, concurrency control, and recovery mechanisms. Students also explore query processing, optimization, indexing, and hashing techniques to enhance database performance.",
                teacher=prabal      
                ) 
            
            Course.objects.create(
                course_id ="ECT257",
                name ="Digital Electronics & Logic Design",
                credit=4,
                semester=4,
                syllabus="Digital Electronics & Logic Design Concept",
                description ="This course introduces students to number systems, binary operations, and switching algebra theorems used in logic functions. Students learn to simplify logic functions using Karnaugh maps and design both combinational and sequential circuits. The course also covers state-machine analysis and synthesis, enabling students to understand and design digital systems effectively.",
                        
                ) 
            Course.objects.create(
                course_id ="ECT253",
                name ="Communication System",
                credit=4,
                semester=4,
                syllabus="Communication System Concept",
                description ="The course focuses on explaining the fundamental principles of analog and digital communication to undergraduate students. Through theoretical concepts and practical examples, students gain insights into various communication techniques and systems used in modern telecommunications.",
                
                )
            
            Course.objects.create(
                course_id ="EET258",
                name ="Control System",
                credit=3,
                semester=4,
                syllabus="Control System Concept",
                description ="This course aims to develop students' understanding of control systems and their applications in everyday life. Students learn about block diagram reduction, time domain analysis, stability analysis in frequency and time domains, and controller design to meet specific specifications. Through theoretical concepts and hands-on exercises, students gain practical knowledge of control systems engineering.",
                
                )
            
            Course.objects.create(
                course_id ="ITL254",
                name ="Web Programming",
                credit=2,
                semester=4,
                syllabus="Web Programming  Concept",
                description ="In this course, students will learn the fundamentals of web development, starting with creating HTML documents to structure and format content. They will explore various HTML elements to include images, tables, frames, and multimedia objects, enabling them to develop static websites. Additionally, students will delve into Cascading Style Sheets (CSS) to enhance the visual presentation of web pages, mastering techniques to style and layout elements effectively. The course also focuses on designing and implementing dynamic websites, equipping students with the skills to create interactive and aesthetically pleasing web interfaces using the latest technical knowledge and design principles. By the end of the course, students will be proficient in building functional and visually appealing websites that meet modern web standards.",
                teacher=saniya     
                ) 
            
            Course.objects.create(
                course_id ="EET101",
                name ="Basic Electrical Engineering",
                credit=3,
                semester=2,
                syllabus="Basic Electrical Engineering Concept",
                description ="Acquire a comprehensive knowledge of DC circuits and their components, utilizing Kirchhoff's Voltage and Current Laws (KVL/KCL) and various network theorems. Analyze and compute power in AC circuits, with a basic understanding of three-phase circuits. Evaluate transformer working principles and performance metrics. Examine the operation of DC and AC machines, along with proficiency in using basic measurement instruments.",
                
                )
            
            Course.objects.create(
                course_id ="HST101",
                name ="Basic English and Communication Skills ",
                credit=3,
                semester=1,
                syllabus="Basic English and Communication Skills  Concept",
                description ="This course introduces fundamental English language concepts and essential communication skills. Students learn basic grammar rules, vocabulary, and sentence structures to build a solid foundation in English. Emphasis is placed on improving reading, writing, speaking, and listening abilities, enabling effective communication in everyday situations. Through interactive exercises and practical activities, students gain confidence in expressing themselves clearly and accurately in English.",
                
                )  
            
            Course.objects.create(
                course_id ="CHT101",
                name ="Engineering Chemistry",
                credit=3,
                semester=2,
                syllabus="Engineering Chemistry  Concept",
                description ="This course focuses on analyzing the properties and applications of polymeric and nanomaterials, estimating parameters of water quality, identifying fuels and their uses, and addressing corrosion issues through the use of lubricants. Students will gain insights into the molecular structure, behavior, and practical applications of these materials. By understanding their properties and behaviors, students will be able to make informed decisions and solutions in various industrial and environmental contexts."
                
                )
            
            Course.objects.create(
                course_id ="ITT101",
                name ="Computer Programming ",
                credit=3,
                semester=2,
                syllabus="Computer Programming   Concept",
                description ="In this course, students will explore the fundamentals of the C programming language, including functions, data types, characters, keywords, and operators. They will analyze and apply conditional and iterative statements, as well as utilize functions effectively. Furthermore, students will evaluate complex data types such as arrays, structures, pointers, and unions offered by C. They will compare different memory allocation techniques and implement file handling concepts, gaining practical experience in software development and problem-solving using C programming.",
                teacher=janib
                )
            
            Course.objects.create(
                course_id ="CVT102",
                name ="Engineering Drawing",
                credit=3,
                semester=2,
                syllabus="Engineering Drawing Concept",
                description ="This course aims to develop skills in translating geometric and topological information of common engineering objects into engineering drawings using standard graphical techniques. Students will learn to represent two-dimensional and three-dimensional objects accurately and effectively through various drawing methods. The objective is to equip students with the ability to communicate technical information visually, facilitating understanding and collaboration in engineering design and manufacturing processes.",
                        
                )
            
            Course.objects.create(
                course_id ="MAT101",
                name ="Mathematics I",
                credit=3,
                semester=1,
                syllabus="Mathematics I Concept",
                description ="Mathematics 1 provides students with foundational knowledge in differential calculus and matrices. Students will learn fundamental concepts and techniques related to differentiation, including finding derivatives of functions and understanding their geometric interpretations. Additionally, the course covers matrices and their applications, including solving systems of linear equations and transformations. By the end of the course, students will have a solid understanding of these mathematical tools and their relevance in various fields.",
                        
                )
            
            Course.objects.create(
                course_id ="PHT101",
                name ="Engineering Physics",
                credit=3,
                semester=1,
                syllabus="Engineering Physics Concept",
                description ="The course aims to demonstrate the limitations of Newtonian Mechanics in accurately describing physical phenomena in our universe. It highlights two key scenarios where Newtonian mechanics falls short: when dealing with small-scale systems and when objects approach the speed of light. To address these limitations effectively, the course delves into Quantum Mechanics and the Special Theory of Relativity, along with exploring materials at small scales and in low dimensions. Additionally, the course covers fundamental concepts of electromagnetism, their practical applications in modern science, technology, and everyday life. Through theoretical insights and practical examples, students gain a deeper understanding of these foundational principles and their significance in understanding the complexities of the physical world.",
                        
                )
            
            Course.objects.create(
                course_id ="HST102",
                name ="Advanced English Comm.Skills & Organizational Behavior",
                credit=3,
                semester=2,
                syllabus="Advanced English Comm.Skills & Organizational Behavior Concept",
                description ="Advanced English and Communication Skills course builds upon the foundation established in basic English proficiency. It focuses on refining language skills to an advanced level, including complex grammar structures, idiomatic expressions, and nuanced vocabulary usage. Students engage in advanced reading comprehension, critical analysis, and essay writing to develop sophisticated communication abilities. Additionally, the course covers advanced speaking and listening strategies for effective communication in professional and academic contexts. Through intensive practice and feedback, students enhance their fluency, coherence, and accuracy in English communication.",
                        
                ) 
            
            Course.objects.create(
                course_id ="CVT101",
                name ="Engineering Mechanics",
                credit=3,
                semester=1,
                syllabus="Engineering Mechanics Concept",
                description ="Gain a foundational understanding of Engineering Mechanics principles to solve engineering problems effectively. Develop skills in applying fundamental concepts and theories to real-world engineering scenarios, facilitating the analysis and resolution of mechanical system issues.",
                        
                )
            
            Course.objects.create(
                course_id ="MET101",
                name ="Elements of Mechanical Engg.",
                credit=3,
                semester=1,
                syllabus="Elements of Mechanical Engg. Concept",
                description ="Explore materials and manufacturing processes used in industrial settings. Assess the efficiency of energy conversion and conservation systems. Apply fluid engineering concepts across diverse practical fields. Select suitable drive trains for specific applications in industrial machinery.",
                        
                )
            
            Course.objects.create(
                course_id ="CHT102",
                name ="Environmental Studies",
                credit=3,
                semester=1,
                syllabus="Environmental Studies  Concept",
                description ="This course focuses on understanding the environment and its impact on sustainability. Students explore the role of natural resources, ecosystems, and biogeochemical cycles in maintaining environmental balance. They learn to classify environmental pollutions and analyze control measures. Additionally, the course examines social aspects related to the environment through field assignments, fostering a comprehensive understanding of environmental issues and their implications for society.",
                        
                )
            
            Course.objects.create(
                course_id ="MAT102",
                name ="Mathematics II",
                credit=3,
                semester=2,
                syllabus="Mathematics II Concept",
                description ="Mathematics 2 builds upon the concepts learned in Mathematics 1 and focuses on integral calculus and ordinary differential equations. Students will explore techniques for integrating functions and applications of integrals in areas such as area calculation and volume determination. Furthermore, the course covers ordinary differential equations and methods for solving them, including separation of variables and integrating factors. Through theoretical study and practical examples, students will develop proficiency in integral calculus and differential equations, preparing them for advanced mathematical topics and their applications in science and engineering.",
                
                )
            
            Course.objects.create(
                course_id ="WSP100",
                name ="Work shop Practice",
                credit=2,
                semester=1,
                syllabus="Work shop Practice Technique",
                description ="This course equips students with essential skills in various machining operations, welding, sheet-metal work, forging, foundry operations, carpentry, and fitting. Through hands-on experience, students learn to identify and utilize appropriate tools and techniques for machining operations. They gain knowledge of welding and sheet-metal shop practices, including joints, tools, operations, and techniques. Additionally, students acquire basic principles and techniques for forging and foundry operations, as well as practical skills in carpentry and fitting shop tasks using different tools and fixtures.",
                
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