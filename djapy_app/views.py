from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
# https://djangoforbeginners.com/hello-world/

def home_page_view(request):
    return HttpResponse("Hello, World!")