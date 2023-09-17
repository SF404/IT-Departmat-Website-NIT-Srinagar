import random
import string
from django.shortcuts import render,redirect
from IT_DEPARTMENT.models import Teacher

# Create your views here.
def index(request):
    return render(request,"index.html")
def loginUser(request):
    if request.method=="POST":
        username =request.POST.get("username")
        password =request.POST.get("password")
        print("login")
        try:
            user = Teacher.objects.get(temporary=username, password=password)
        except Teacher.DoesNotExist:
            return render(request, 'login.html', {'error_message': 'Invalid credentials'})
        return redirect('dashboard')
        
    return render(request,"login.html")
def signup(request):
    if request.method=="POST":
        name =request.POST.get("name")
        email =request.POST.get("email")
        username =request.POST.get("username")
        password =request.POST.get("password")
        sid = ''.join(random.choices(string.ascii_uppercase + string.digits, k=random.randint(3, 4)))
        user=Teacher(name=name,sid=sid,email=email,password=password,temporary=username)
        user.save()
        print("data saved")
    return render(request,"signup.html")
def dashboard(request):
    context = {
        'name':'Suhaib Ahmad',
        'target':'os.html',
    }
    return render(request,"dashboard.html", context)
def home(request):
    return render(request, "main.html")
def os(request):
    return render(request, "os.html")


