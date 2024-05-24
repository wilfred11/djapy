import asyncio
import os
from datetime import date
from asgiref.sync import async_to_sync
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django_datatables_view.base_datatable_view import BaseDatatableView
from rest_framework.decorators import api_view
from django.core import serializers
from djapy_app.entity_api import ApiCall
from djapy_app.models import Some


class FamiliesPageView(TemplateView):
    template_name = 'gen/dt/families/families-gen.html'

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

class IndividualsPageView(TemplateView):
    template_name = 'gen/dt/individuals/individuals.html'

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

    class SomePageView(TemplateView):
        template_name = "gen/dt/some/some-gen.html"

        def get_context_data(self, **kwargs):
            context = super().get_context_data(**kwargs)
            context['today'] = date.today()
            context['content'] = 'no message'
            context['title'] = 'Home'
            return context

def som(request):
    content = "Hello, World!"
    return render(request, "gen/dt/some/some-gen.html", {'content': content})
