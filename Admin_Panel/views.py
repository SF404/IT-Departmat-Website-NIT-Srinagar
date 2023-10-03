from django.shortcuts import render,redirect
from IT_DEPARTMENT.models import Teacher,Course, Announcement, Alert
import datetime


# Create your views here.
def dashboard(request):

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

    print("hello")

    announcement = Announcement.objects.filter(aid=context.get('sid')).values()
    alert = Alert.objects.filter(aid=context.get('sid')).values()
    context["alert"] = alert
    context["announcement"] = announcement

    if request.method=="POST":
        name = request.POST.get("identifier")

        if name == "ADD +":
            context["target"]="addEvent.html"

        elif name == "Add Announcement":
            description = str(request.POST.get("description"))
            link = str(request.POST.get("link"))
            announcement = Announcement(aid=context.get('sid'), name=context.get('name'), description=description, link=link)
            announcement.save()
            context["target"]="addEvent.html"
        elif name == "Add Alert":
            message = str(request.POST.get("message"))
            valid = str(request.POST.get("valid"))
            alert = Alert(aid=context.get('sid'), message=message, valid=valid)
            alert.save()
            context["target"]="addEvent.html"

        else:
            global course 
            course = Course.objects.get(name=name)
            context["course"] = course

    return render(request, "dashboard.html", context)
