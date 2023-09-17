from django.shortcuts import render,redirect

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
    
    return render(request, "temp.html")
