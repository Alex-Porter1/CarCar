from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import ServiceAppointment, Technician, AutomobileVO
from common.json import ModelEncoder
import json
from django.http import JsonResponse
from sqlite3 import IntegrityError

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties =  [
        "technician_name",
        "employee_number",
    ]

class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "vin",
        "customer_name",
        "scheduled_appointment",
        "reason",
        "finished",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }



@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all().order_by("employee_number")
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Technician ID already exists"},
                status=400,
            )

@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request):
    if request.method == "GET":
        appointments = ServiceAppointment.objects.all().order_by("scheduled_appointment")
        return JsonResponse(
            {"appointments": appointments},
            encoder=ServiceAppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        if "technician" in content:
            try:
                technician = Technician.objects.get(id=content["technician"])
                content["technician"] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Technician does not exist"},
                    status=400,
                )
        appointment = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
