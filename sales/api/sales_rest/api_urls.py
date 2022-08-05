from django.urls import path
from sales_rest.views import api_automobileVO

from sales_rest.views import api_customer, api_customers, api_records, api_personal_sale_record, api_salesperson,api_record,api_salespeople

urlpatterns = [
    path("salespeople/",api_salespeople,name = "api_salespeople"),
    path("salesperson/<int:pk>",api_salesperson,name= "api_salesperson"),
    path("customers/",api_customers, name = "api_customers"),
    path("customer/<int:pk>",api_customer, name = "api_customer"),
    path("records/",api_records,name = "api_records"),
    path("record/<int:pk>",api_record,name = "api_record"),
    path("automobilevo/",api_automobileVO, name="api_automobileVO"),
    path("personalsalerecord/<int:pk>/",api_personal_sale_record, name="api_personal_sale_record")


]