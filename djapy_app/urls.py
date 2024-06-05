# pages/urls.py
from django.urls import path

from .models import Some
from .views import HomePageView, Some_asJson, SomeAjaxDatatableView, Some_TemplateView, SomeJsonList
from .views_dt import (
    IndividualsPageView,
    FamiliesPageView,
    IndividualsPageViewAsync,
)



urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("individuals", IndividualsPageView.as_view(), name="individuals"),
    path(
        "individuals-async",
        IndividualsPageViewAsync.as_view(),
        name="individuals-async",
    ),
    path("families", FamiliesPageView.as_view(), name="families1"),
    path("api/some", SomeJsonList, name="some-api"),
    path("dt/some", SomeAjaxDatatableView.as_view(), name="dt-some"),
    path("some", Some_TemplateView.as_view(), name="some"),
    #path('api/some', SomeAjaxDatatableView.as_view(), name="api-some"),
]

