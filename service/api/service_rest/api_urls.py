from django.urls import path

from .views import api_list_technicians, api_list_service_appointments, api_show_service_appointment, api_list_appointments_by_vin, api_get_automobilevos

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("services/", api_list_service_appointments, name="api_list_service_appointments"),
    path("services/<int:pk>/", api_show_service_appointment, name="api_show_service_appointment"),
    path("history/<str:vin>/", api_list_appointments_by_vin, name="api_list_appointments_by_vin"),
    path("services/inventory", api_get_automobilevos, name="api_get_automobilevos"),
]