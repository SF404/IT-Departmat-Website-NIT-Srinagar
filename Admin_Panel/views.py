from django.shortcuts import render,redirect
from IT_DEPARTMENT.models import Teacher,Course

# Create your views here.
def dashboard(request):
    
        

    # usern = request.session.get("username")
    # passw = request.session.get("password")
    # teacher = Teacher.objects.get(username=usern, password=passw)
    # subjects = Course.objects.filter(teacher=teacher).values_list('name', flat=True)
    # context={
    #     "sid ":teacher.sid,
    #     "name ":teacher.name,
    #     "username":teacher.username,
    #     "email ":teacher.email,
    #     "temporary":teacher.temporary,
    #     "subjects":subjects
    # }
    usern = request.session.get("username")
    passw = request.session.get("password")
    teacher = Teacher.objects.get(username=usern, password=passw)
    courses = Course.objects.filter(teacher=teacher)
    subjects = courses.values_list('name', flat=True)
    semester = courses.values_list('semester', flat=True)



    context = {
    "sid": str(teacher.sid),       # Student ID
    "name": str(teacher.name),     # Teacher's Name
    "username": str(teacher.username),  # Username
    "email": str(teacher.email),   # Email
    "temporary": str(teacher.temporary),  # Temporary (if applicable)
    "subjects": subjects,          # List of subjects
    "semester": semester,
    "target": "panel.html",          # Target URL or template

    }

    if request.method=="POST":
        name = request.POST.get("identifier")
        global course 
        course = Course.objects.get(name=name)
        context["course"] = course

    return render(request, "dashboard.html", context)
