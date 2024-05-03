# pages/urls.py
from django.urls import path

from .views import HomePageView, IndividualsPageView, FamiliesPageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("individuals", IndividualsPageView.as_view(), name="individuals"),
    path("families", FamiliesPageView.as_view(), name="families"),
]