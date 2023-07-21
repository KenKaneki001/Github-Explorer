from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return render(request, 'home.html')

def info(request):
    return render(request, 'newinfo.html')