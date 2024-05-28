# Create your views here.
import asyncio
import json
import logging
from datetime import date

from adrf.viewsets import ViewSet
# from django.core.serializers import json
from django.views.generic import TemplateView
from rest_framework import viewsets
from rest_framework.response import Response

from djapy_app.entity_api import ApiCall
from rest_app.models import Individual
from rest_app.serializers import (
    IndividualSerializer,
    IndividualSchema,
)

logger = logging.getLogger(__name__)


class IndividualViewSet(viewsets.ModelViewSet):
    queryset = Individual.objects.all()
    serializer_class = IndividualSerializer


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


class IndividualViewSetAsync(ViewSet):

    async def list(self, request):
        individuals_ = Individual.objects.all().values("id", "last_name", "first_name")
        individuals = []
        async for individual in individuals_:
            individuals.append(individual)

        schema = IndividualSchema()
        data = schema.dumps(individuals, many=True)
        json_object = json.loads(data)
        # return Response([{"individuals": json_object}])
        return Response(json_object)

    async def retrieve(self, request, pk):
        individual = await Individual.objects.filter(pk=pk).afirst()
        return Response({"individual_pk": individual and individual.pk})
