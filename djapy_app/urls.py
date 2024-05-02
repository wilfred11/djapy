# pages/urls.py
from django.urls import path

from .views import HomePageView, IndividualsPageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("individuals", IndividualsPageView.as_view(), name="individual"),
]