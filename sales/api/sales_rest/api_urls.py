from django.urls import path

from sales_rest.views import api_customer, api_customers, api_records, api_salespeople, api_salesperson,api_record

urlpatterns = [
    path("salespeople/",api_salespeople,name = "api_salespeople"),
    path("salesperson/<int:pk>",api_salesperson,name= "api_salesperson"),
    path("customers/",api_customers, name = "api_customers"),
    path("customer/<int:pk>",api_customer, name = "api_customer"),
    path("records/",api_records,name = "api_records"),
    path("record/<int:pk>",api_record,name = "api_record"),
    


]