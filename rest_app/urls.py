# pages/urls.py
from django.urls import path

from rest_app import views

urlpatterns = [
    path("individuals", views.getData, name="rest"),
]