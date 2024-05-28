import json

from marshmallow import Schema, fields
from rest_framework import serializers

from rest_app.models import Individual


class IndividualSerializer(serializers.ModelSerializer):
    class Meta:
        model = Individual
        fields = ["id", "last_name", "first_name", "email"]


class ListOfListsEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, list):
            return obj
        return json.JSONEncoder.default(self, obj)


def obj_dict(obj):
    return obj.__dict__


class IndividualSchema(Schema):
    id = fields.Str()
    first_name = fields.Str()
    last_name = fields.Str()


class IndividualsSchema(Schema):
    individuals = fields.Nested(IndividualSchema, many=True)
