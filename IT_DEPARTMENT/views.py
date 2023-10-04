
from django.shortcuts import render,redirect
from IT_DEPARTMENT.models import Teacher,Course, Alert, Announcement
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
# from corsheaders.decorators import cors_headers
from . import views
# from corsheaders.decorators import cors_headers
from django.views.decorators.csrf import csrf_exempt


 
# import view sets from the REST framework
from rest_framework import viewsets
 
# import the TeacherSerializer from the serializer file
from .serializers import TeacherSerializer, CourseSerializer

 

class TeacherView(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
 
    def get_queryset(self):
        sid = self.request.query_params.get('sid')
        queryset = Teacher.objects.filter(sid=sid)
        return queryset
    
class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
 
    def get_queryset(self):
        sid = self.request.query_params.get('sid')
        teacher = Teacher.objects.get(sid=sid)
        print("sid", teacher.name)
        queryset = Course.objects.filter(teacher=teacher)
        print(queryset[0].cid)
        return queryset



# @cors_headers()
@csrf_exempt
def temporary(request):
    sid = request.GET.get('sid')
    teacher = Teacher.objects.get(sid=sid)
    print(sid)
    return JsonResponse(teacher)

# Create your views here.
def index(request):
    return render(request,"index.html")
def loginUser(request):
    usern = request.session.get("username")
    passw = request.session.get("password")

    if usern and passw:
        return redirect("dashboard")

    if(request.method == "POST"):
        usern=request.POST.get("username") 
        passw=request.POST.get("password")
        try:
            teacher = Teacher.objects.get(username=usern, password=passw)
            if teacher:
                request.session['username'] = usern
                request.session['password'] = passw
                return redirect("dashboard")
        except Teacher.DoesNotExist:
            pass  
        
    return render(request,"login.html")
def signupUser(request):
    if request.method=="POST":
        k="password"
        selected_options = request.POST.getlist('option')
        sid =request.POST.get("sid")
        name =request.POST.get("name")
        username=  request.POST.get("username") 
        email = request.POST.get("email")
        password = k
        temporary= "H is good"
        teacher=Teacher(sid=sid,name=name,username=username,email=email,password=password,temporary=temporary)
        teacher.save()
        for course_name in selected_options:
            course = Course.objects.get(cid=course_name)
            course.teacher=teacher
            course.save()
    print("Data Saved")
    return render(request,"signup.html")



def home(request):
    context={

    }
    alert = Alert.objects.order_by('-date').values()
    announcement = Announcement.objects.values()
    context["alert"] = alert
    context["announcement"] = announcement
    return render(request, "main.html", context)
def os(request):
    return render(request, "os.html")
