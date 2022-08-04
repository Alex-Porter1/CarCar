from django.contrib import admin

# Register your models here.
from .models import Technician, ServiceAppointment, AutomobileVO

admin.site.register(Technician)
admin.site.register(ServiceAppointment)
admin.site.register(AutomobileVO)