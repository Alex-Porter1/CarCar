from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_vin = models.CharField(max_length=200, unique=True)
    is_sold = models.BooleanField(default=False)

    def has_sold(self):
        self.is_sold = True

    


class SalesPerson(models.Model):
    name = models.CharField(max_length=80)
    employee_number = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"pk": self.pk})

class Customer(models.Model):
    name = models.CharField(max_length=80)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20,unique=True)

class SaleRecords(models.Model):
    vin = models.ForeignKey(
        AutomobileVO,
        related_name="sale_records",
        on_delete=models.CASCADE,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sale_person",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )
    price = models.DecimalField(max_digits=8, decimal_places=2)

    