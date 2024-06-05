from datetime import date

from django.core import serializers
from django.core.mail.backends import console
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django_datatables_view.base_datatable_view import BaseDatatableView
from rest_framework.decorators import api_view
from ajax_datatable.views import AjaxDatatableView
from rest_framework.response import Response

from djapy_app.models import Some

import logging

logger = logging.getLogger(__name__)


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


class SomeAjaxDatatableView(BaseDatatableView):
    model = Some


def SomeJsonList(request):
    data = list(Some.objects.values("id", "l_name", "f_name"))
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
    logger.info('Some_asJson')
    data = list(Some.objects.values())
    return JsonResponse({'data': data})

class Some_TemplateView(TemplateView):
    logger.info('Some')
    template_name = "gen/dt/some/some-gen.html"
