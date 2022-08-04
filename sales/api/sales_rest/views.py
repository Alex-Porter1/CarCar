from django.db import IntegrityError
from django.shortcuts import render
from django.http import JsonResponse
from common.json import ModelEncoder
import json
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, SalesPerson ,SaleRecords,Customer

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ['import_vin']

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ['name','employee_number']


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ['name','address','phone_number','id']


class SaleRecordsEncoder(ModelEncoder):
    model = SaleRecords
    properties = ['sales_person','price', 'customer','vin','id']
    encoders = {
        "sales_person" : SalesPersonEncoder(),
        "customer":CustomerEncoder(),
        "vin":AutomobileVOEncoder(),
    }

def api_automobileVO(request):
    automobiles = AutomobileVO.objects.filter(is_sold=False)
    return JsonResponse(
        {"automobiles":automobiles},
        encoder=AutomobileVOEncoder
    )


@require_http_methods(["GET", "POST"])
def api_salespeople(request):
    if request.method=='GET':
        people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person":people},
            encoder=SalesPersonEncoder,
           
        )
    else:
        content = json.loads(request.body)
        try:
            people = SalesPerson.objects.create(**content)
            return JsonResponse(
                people, 
                encoder=SalesPersonEncoder,
                safe = False,
                )
        except IntegrityError:
            return JsonResponse(
                {'message':"Employee number already exist."}
                )


@require_http_methods(["DELETE", "PUT"])    
def api_salesperson(request,pk):
    if request.method == 'DELETE':
        count,_ = SalesPerson.objects.filter(id=pk).delete()
        return JsonResponse({"delete": count > 0})
    else:
        content = json.loads(request.body)
        try:
            person = SalesPerson.objects.get(id=pk)
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales person does not exist."}
            )
        SalesPerson.objects.filter(id=pk).update(**content)
        return JsonResponse(
            person,
            encoder=SalesPersonEncoder,
            safe = False
        )




@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method=='GET':
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers" : customers},
            encoder=CustomerEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer, 
                encoder=CustomerEncoder,
                safe = False,
                )

        except IntegrityError:
            return JsonResponse(
                {'message':"Customer already exist."}
                )
        
       
@require_http_methods(["DELETE", "PUT"])    
def api_customer(request,pk):
    if request.method == 'DELETE':
        try:
            count,_ = Customer.objects.filter(id=pk).delete()
            return JsonResponse({"delete": count > 0})
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist."}
            )
    else:
        customer = Customer.objects.filter(id=pk)
        content = json.loads(request.body)
        customer.update(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe = False
        )


@require_http_methods(["GET", "POST"])
def api_records(request):
    if request.method=='GET':
        records = SaleRecords.objects.all()
        return JsonResponse(
            {"sales_records": records},
            encoder=SaleRecordsEncoder,
            safe= False
        )
    else:
        content = json.loads(request.body)
        try:
            employee = content['sales_person']
            sale_person = SalesPerson.objects.get(employee_number=employee)
            content['sales_person']=sale_person
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Invalid sales person input."})
        
        try:
            phone = content['customer']
            customer = Customer.objects.get(phone_number = phone)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid customer input."})

        try:
            vin_number = content['vin']
            automobile = AutomobileVO.objects.get(import_vin=vin_number)
            automobile.has_sold()
            automobile.save()
            content['vin']=automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message":"Invalid VIN input"},status=400
            )
        
    
        record = SaleRecords.objects.create(**content)
        return JsonResponse(
            record,
            encoder=SaleRecordsEncoder,
            safe= False
        )

    
@require_http_methods(["DELETE", "PUT"])    
def api_record(request,pk):
    if request.method == 'DELETE':
        try:
            count,_ = SaleRecords.objects.filter(id=pk).delete()
            return JsonResponse({"delete": count > 0})
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Record does not exist."}
            )