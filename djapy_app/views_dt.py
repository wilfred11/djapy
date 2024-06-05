import asyncio
from datetime import date

from ajax_datatable import AjaxDatatableView
from django.core.exceptions import PermissionDenied
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.views.generic import TemplateView

from djapy_app.entity_api import ApiCall
from djapy_app.models import Some
import logging

logger = logging.getLogger(__name__)


class FamiliesPageView(TemplateView):
    template_name = "gen/dt/families/families-gen.html"

    def get_json_data(self):
        api_call = ApiCall()
        json = asyncio.run(api_call.get_json_data(data_type="families"))
        return json

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["today"] = date.today()
        context["title"] = "Families"
        context["content"] = self.get_json_data()
        return context


class IndividualsPageView(TemplateView):
    logger.info('XXXXXXXXXXXXXXXXXXXXXX')
    template_name = "gen/dt/individuals/individuals-gen.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["today"] = date.today()
        context["title"] = "Individuals"
        return context


class IndividualsPageViewAsync(TemplateView):
    template_name = "gen/dt/individuals_async/individuals_async-gen.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["today"] = date.today()
        context["title"] = "Individuals"
        return context


"""class SomePageView(TemplateView):
    template_name = "gen/dt/some/some-gen.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["today"] = date.today()
        context["content"] = "no message"
        context["title"] = "Home"
        return context"""


class SomeAjaxDatatableView(AjaxDatatableView):
    logger.info('SomeAjaxDatatableView')
    model = Some
    title = 'Some'
    initial_order = [["f_name", "l_name", "asc"], ]
    length_menu = [[10, 20, 50, 100, -1], [10, 20, 50, 100, 'all']]
    search_values_separator = '+'

    column_defs = [
        AjaxDatatableView.render_row_tools_column_def(),
        {'name': 'id', 'visible': True, },
        {'name': 'l_name', 'visible': True, },
        {'name': 'f_name', 'visible': True, },
    ]

    def get_initial_queryset(self, request=None):
        logger.info('get_initial_queryset')
        #if not request.user.is_authenticated:
        #    raise PermissionDenied

        # We accept either GET or POST
        if not getattr(request, 'REQUEST', None):
            request.REQUEST = request.GET if request.method == 'GET' else request.POST

        queryset = self.model.objects.all().values("id", "l_name", "f_name")

        """if 'client_id' in request.REQUEST:
            client_id = int(request.REQUEST.get('client_id'))
            queryset = queryset.filter(client_id=client_id)"""

        return queryset
