from django.http import FileResponse
from django.shortcuts import render,redirect,HttpResponse,get_object_or_404
from IT_DEPARTMENT.models import Teacher,Course,Assignment
from django.contrib.auth.decorators import login_required
from .forms import AssiignmentForm

# Create your views here.
def index(request):
    return render(request,"index.html")
def loginUser(request):
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
        k="password";
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

def uploadfile(request):
    if request.method == 'POST':
        form = AssiignmentForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
           # return redirect('login')
    else:
        form = AssiignmentForm()
        context = {
            'form':form,
        }
        return render(request, 'upload.html',context)
    return HttpResponse("done")

def downloadfile(request):
    # Replace 'MyModel' with the name of your model containing the uploaded file
    file_id=32
    my_model_instance = Assignment.objects.get(aid=file_id)
    file_path = my_model_instance.pdf.path
    with open(file_path, 'rb') as pdf_file:
        response = HttpResponse(pdf_file.read(), content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="{my_model_instance.pdf.name}"'
        return response

def dashboard(request):
    usern = request.session.get("username")
    passw = request.session.get("password")
    teacher = Teacher.objects.get(username=usern, password=passw)
    subjects = Course.objects.filter(teacher=teacher).values_list('name', flat=True)
    context={
        "sid ":teacher.sid,
        "name ":teacher.name,
        "username":teacher.username,
        "email ":teacher.email,
        "temporary":teacher.temporary,
        "subjects":subjects
    }
    
    return render(request, "dashboard.html",context)