# pages/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rest_app import views
from rest_app.views import IndividualViewSet

router = DefaultRouter()
router.register(r"individuals", IndividualViewSet)

router1 = DefaultRouter()
router1.register(r"individuals", views.IndividualViewSetAsync, basename="async")

urlpatterns = [
    # path("api/", include((router.urls, "rest_app"), namespace="rest_app")),
    path("api/async/", include((router1.urls, "rest_app"), namespace="rest_app")),
    path("api/", include((router.urls, "rest_app"), namespace="rest_app")),
]
