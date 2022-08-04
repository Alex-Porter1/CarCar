# CarCar

Team:

* Person 1 - Alex Porter Service
* Person 2 - Menger Dou Sales

## Design

## Service microservice

I'm going to create a Technician Model. The properties will include a name and employee number(unique?).
A Service Appointment Model. The properties will include a VIN(has to be unique), customer name, the date and time of appointment, reason for the appointment, and the technician as a Foreign Key. I'll also need to include some form of finished property as a boolean value. Shown in the picture example for when an appointment is finished.
I will also need create an AutomobileVO model to poll from the Inventory Automobile model, using the VIN, import_href.
Make sure to register the models to the admin.
Make the migrations after creating these models.
I will then need to create the polling functionality for the AutomobileVO to implement the VIP functionality.
Use the admin to check if polling is working correctly. 
After polling is working the way I want, I will work on creating the views.
The views need a get, post, put, and delete.
Create a view for the technician, service appointments, and automobileVO.





## Sales microservice

Explain your models and integration with the inventory
microservice, here.
