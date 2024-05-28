import asyncio
from datetime import date

from django.views.generic import TemplateView

from djapy_app.entity_api import ApiCall


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


class SomePageView(TemplateView):
    template_name = "gen/dt/some/some-gen.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["today"] = date.today()
        context["content"] = "no message"
        context["title"] = "Home"
        return context
