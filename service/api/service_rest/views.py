from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Technician
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
