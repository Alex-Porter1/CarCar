from django.contrib import admin

from .models import Technician, ServiceAppointment, AutomobileVO

admin.site.register(Technician)
admin.site.register(ServiceAppointment)
admin.site.register(AutomobileVO)