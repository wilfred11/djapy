# pages/urls.py
from django.urls import path

from .views import HomePageView, IndividualsPageView, FamiliesPageView, SomeAjaxDatatableView, test, SomeJsonList, \
    some_list, Some_asJson

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("individuals", IndividualsPageView.as_view(), name="individuals"),
    path("families", SomeAjaxDatatableView.as_view(), name="families1"),
    path("test", test, name="test"),
    path("some",Some_asJson , name="some"),
]