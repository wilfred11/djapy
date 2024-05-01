from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.
# https://djangoforbeginners.com/hello-world/

def home_page_view(request):
    return HttpResponse("Hello, World!")

class HomePageView(TemplateView):
    template_name = "home.html"