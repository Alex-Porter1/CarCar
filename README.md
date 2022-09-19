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

For sales, I create a AutomobileVO model(a value object of the Automobile model in the inventory_api) to get data, properties will include the import_vin and I will define a function is_sold to track and change the state for the automobile's stock info. If the state is sold. we can not sell it anymore.
Create SalesPerson model which properties will include the person's name and employee number.The employee number will be unique in order to search the specific person wen need.
Create a Customer model repersent a customer who will purchse an automobile which perperties will include customer's name,address and phone number.And phone number must be unique so that we can search customer by unique phone number if there pops up same name customers.

Create SalesRecords model.This allows the user to document a sale made by the dealership, a sale made will also change the state of inventory for the automobile . The properties will include a VIN which will take AuotomobilVO as foreignkey , salesperson which will take SalesPerson as forignkey, customer which will take Customer as the foreignkey, and also the price for the automobile.
Make the migrations after creating these models.
Finish views.py to implement get, post, put, and delete methods for all the models. Here use encoders to make our code clean.
Then make sure we can succuessfully poll data from Inventory by finishing poller.py, after that we can test our method in Insomnia.


