import asyncio
from datetime import date
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django_datatables_view.base_datatable_view import BaseDatatableView
from rest_framework.decorators import api_view
from djapy_app.entity_api import ApiCall
from djapy_app.models import Some


# Create your views here.
# https://djangoforbeginners.com/hello-world/
# https://dev.to/pragativerma18/unlocking-performance-a-guide-to-async-support-in-django-2jdj

# TODO https://www.pluralsight.com/resources/blog/guides/work-with-ajax-django
class HomePageView(TemplateView):
    template_name = "gen/basic/home/home-gen.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['today'] = date.today()
        context['content'] = 'no message'
        context['title'] = 'Home'
        return context


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


class SomeAjaxDatatableView(BaseDatatableView):
    model = Some



def SomeJsonList(request):
    data = list(Some.objects.values())
    return JsonResponse({'data': data})


@api_view(['GET'])
def some_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        data = list(Some.objects.values())
        return JsonResponse({'data': data})


def Some_asJson(request):
    object_list = Some.objects.all()  # or any kind of queryset
    json = serializers.serialize('json', object_list)
    return HttpResponse(json, content_type='application/json')
