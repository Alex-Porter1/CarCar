from django.db import models
from django.urls import reverse

# Create your models here.

class Technician(models.Model):
    technician_name = models.CharField(max_length=50)
    employee_number = models.SmallIntegerField(unique=True)

    def __str__(self):
        return f"employee # {self.employee_number}: {self.technician_name}"

class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=50)
    scheduled_appointment = models.DateTimeField()
    reason = models.CharField(max_length=200)
    finished = models.BooleanField(default=False)
    technician = models.ForeignKey(
        "Technician",
        related_name = "appointment",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return f"{self.customer_name}'s vin # {self.vin} appointment for {self.reason}"
    
    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=100)

    def __str__(self):
        return f"vin: {self.vin}"