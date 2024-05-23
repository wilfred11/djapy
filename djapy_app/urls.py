# pages/urls.py
from django.urls import path

from .views import HomePageView, SomeAjaxDatatableView, test, SomeJsonList, \
    some_list, Some_asJson
from .views_dt import IndividualsPageView, FamiliesPageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("individuals", IndividualsPageView.as_view(), name="individuals"),
    path("families", SomeAjaxDatatableView.as_view(), name="families1"),
    path("test", test, name="test"),
    path("some",Some_asJson , name="some"),
]