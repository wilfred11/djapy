# pages/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rest_app import views

# router = DefaultRouter()
# router.register(r"individuals", IndividualViewSet)

router1 = DefaultRouter()
router1.register(r"individuals", views.IndividualViewSet, basename="async")

urlpatterns = [
    # path("api/", include((router.urls, "rest_app"), namespace="rest_app")),
    path("api/", include((router1.urls, "rest_app"), namespace="rest_app")),
]
