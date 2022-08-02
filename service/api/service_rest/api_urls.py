from django.urls import path

from .views import api_list_technicians, api_list_service_appointments

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("services/", api_list_service_appointments, name="api_list_service_appointments"),
]