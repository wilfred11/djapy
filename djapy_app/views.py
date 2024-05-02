import os
from datetime import date
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView
import requests


# Create your views here.
# https://djangoforbeginners.com/hello-world/

class IndividualsPageView(TemplateView):
    template_name = 'individuals.html'

    def get_json_data(self):
        key = os.getenv("BEARER_KEY")
        url = os.getenv("API_URL") + 'individuals'
        headers = {'content-type': 'application/json', 'authorization': 'Bearer ' + key}
        response = requests.get(url, headers=headers)
        return response.json()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['today'] = date.today()
        context['title'] = 'Individuals'
        context['content'] = self.get_json_data()
        return context


class HomePageView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['today'] = date.today()
        context['content'] = 'no message'
        context['title'] = 'Home'
        return context
