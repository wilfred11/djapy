# pages/urls.py
from django.urls import path

from .views import HomePageView, SomeAjaxDatatableView, test, SomeJsonList, \
    some_list, Some_asJson
from .views_dt import IndividualsPageView, FamiliesPageView, som

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("individuals", IndividualsPageView.as_view(), name="individuals"),
    path("families", FamiliesPageView.as_view(), name="families1"),
    path("test", test, name="test"),
    path("s", som, name="s"),
    path("some",Some_asJson , name="some"),


]