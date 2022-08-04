from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=100)


class Technician(models.Model):
    technician_name = models.CharField(max_length=50)
    employee_number = models.SmallIntegerField(unique=True)


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=50)
    scheduled_appointment = models.DateTimeField()
    reason = models.CharField(max_length=200)
    finished = models.BooleanField(default=False)
    VIP = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name = "appointment",
        on_delete=models.PROTECT,
    )

        