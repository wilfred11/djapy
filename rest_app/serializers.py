from rest_framework import serializers

from rest_app.models import Individual


class IndividualSerializer(serializers.ModelSerializer):
    class Meta:
        model = Individual
        fields = ['id', 'last_name', 'first_name', 'email']
