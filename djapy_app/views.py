import asyncio
import os
from datetime import date

from asgiref.sync import async_to_sync
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView

from djapy_app.entity_api import ApiCall


# Create your views here.
# https://djangoforbeginners.com/hello-world/
# https://dev.to/pragativerma18/unlocking-performance-a-guide-to-async-support-in-django-2jdj


class HomePageView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['today'] = date.today()
        context['content'] = 'no message'
        context['title'] = 'Home'
        return context


class IndividualsPageView(TemplateView):
    template_name = 'individuals.html'

    def get_json_data(self):
        api_call = ApiCall()
        json = asyncio.run(api_call.get_json_data(data_type='individuals'))
        return json

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['today'] = date.today()
        context['title'] = 'Individuals'
        context['content'] = self.get_json_data()
        return context


class FamiliesPageView(TemplateView):
    template_name = 'families.html'

    def get_json_data(self):
        api_call = ApiCall()
        json = asyncio.run(api_call.get_json_data(data_type='families'))
        return json

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['today'] = date.today()
        context['title'] = 'Families'
        context['content'] = self.get_json_data()
        return context
