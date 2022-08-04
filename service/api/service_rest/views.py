from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import ServiceAppointment, Technician, AutomobileVO
from common.json import ModelEncoder
import json
from django.http import JsonResponse
from sqlite3 import IntegrityError


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties =  [
        "id",
        "technician_name",
        "employee_number",
    ]

class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "VIP",
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
        vin = content["vin"]

        try:
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Technician does not exist"},
                    status=400,
                )

        try:
            vin_in_inventory = AutomobileVO.objects.get(vin=vin)
        except AutomobileVO.DoesNotExist:
            vin_in_inventory = None

        if vin_in_inventory:
            content["VIP"] = True
        else:
            content["VIP"] = False
            
        appointment = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_service_appointment(request, pk):
    if request.method == "GET":
        appointment = ServiceAppointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        ServiceAppointment.objects.filter(id=pk).update(finished=True)
        appointment = ServiceAppointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    else:
        count, _ = ServiceAppointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET"])
def api_list_appointments_by_vin(request, vin):
    if request.method == "GET":
        appointments = ServiceAppointment.objects.filter(vin=vin)
        print(appointments)
        return JsonResponse(
            {"appointments": appointments},
            encoder=ServiceAppointmentEncoder,
        )

@require_http_methods(["GET"])
def api_get_automobilevos(request):
    if request.method == "GET":
        automobile = AutomobileVO.objects.all()
        return JsonResponse(
            {"autos": automobile},
            encoder=AutomobileVOEncoder,
        )


