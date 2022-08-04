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

Need to create a AutomobileVO model to poll data from Inventory Automobile model, properties will include the import_vin and I will define a function is_sold to track and change the state for the automobile's stock info. If the state is sold. we can not sell it anymore.
create SalesPerson model which properties will include the person's name and employee number.The employee number will be unique in order to get the sepecific person wen need.
create a Customer model which perperties will include customer's name,address and phone number.And phone number will be unique so that we can search customer by unique phone number.
create SalesRecords model.  The properties will include a VIN which will take AuotomobilVO as foreignkey , salesperson which will take SalesPerson as forignkey, customer which will take Customer as the foreignkey, and also the price for the automobile.
Make the migrations after creating these models.
Finish views.py to implement get, post, put, and delete methods for all the models. Here use encoders to make our code clean.
Then make sure we can succuessfully poll data from Inventory by finishing poller.py, after that we can test our methid in Insomnia.