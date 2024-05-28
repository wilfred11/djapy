# pages/urls.py
from django.urls import path

from .views import HomePageView, Some_asJson
from .views_dt import (
    IndividualsPageView,
    FamiliesPageView,
    SomePageView,
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
    path("api/some", Some_asJson, name="some-api"),
    path("some", SomePageView.as_view(), name="some"),
]
