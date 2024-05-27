# Create your views here.
from rest_framework import viewsets

from rest_app.models import Individual
from rest_app.serializers import IndividualSerializer


class IndividualViewSet(viewsets.ModelViewSet):
    queryset = Individual.objects.all()
    serializer_class = IndividualSerializer
