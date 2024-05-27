# pages/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rest_app.views import IndividualViewSet

router = DefaultRouter()
router.register(r"individuals", IndividualViewSet)

urlpatterns = [path("api/", include((router.urls, "rest_app"), namespace="rest_app"))]
