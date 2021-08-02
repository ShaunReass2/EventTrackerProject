# EventTrackerProject

### Full-Stack Spring/REST/JPA Project for Skill Distillery
### By Shaun Reass

### Overview

This code comprises the back-end of a full-stack application, which enables a user to track motorcycles and their specifications, as well as important details of riding routes.  

### Technologies Used

* Coding Languages: Java and SQL
* Object-Oriented Design
* Try-Catch Statements
* Exceptions
* Spring Data JPA
* Spring Boot
* Model View Controller (MVC) Pattern
* Gradle
* MySQL Workbench
* Spring Data JPA Repositories

### How to Run

This portion of code consists of the back-end of a full-stack application.  While portions of this code can be tested in a local browser to demonstrate proper function, the
recommended way of testing code function and CRUD implementation is with Postman.  This code implements full CRUD with: 1) findAll, 2) findById, 3) create, 4) update, and 5) delete functions.  While in Postman and connected to the motordb database in a terminal, create a New Collection to get started.  It is recommended to open separate tabs for each test, as the settings differ for each and you can save some time if running multiple tests.  For findAll, start by choosing GET in the dropdown menu to the left of the URL field.  Enter the proper URL, in this case http://localhost:8084/api/motorcycles, and ensure appropriate dropdown menus are set to JSON and not TEXT.  After clicking the Send button on the top right, the program will run and display all motorcycles and information in the database.  To findById, open a new tab and ensure GET is selected, also ensuring JSON is chosen in the appropriate dropdown menus.  Enter the proper URL http://localhost:8084/api/motorcycle/{id}.  The "{id}" in the URL is meant to be changed with whatever motorcycle you wish to retrieve associated with that id number.  To create a motorcycle, open a new tab and choose POST.  Enter the proper URL http://localhost:8084/api/motorcycle.  Additionally, ensure the Body and Raw options are chosen, along with JSON in the appropriate dropdown menus.  The Body field is where the user can enter data for any new motorcycle and route information they wish to enter into the database.  Click the send button to enter the information into the database.  Newly created motorcycles are auto-assigned id numbers, so it is not necessary for the user to do so.  Updating a motorcycle is very similar to creating one.  In a new tab, choose PUT and JSON for the appropriate dropdown menus.  Use a motorcycle and route specifications from your prior findById test as a template, and change any information you wish to update.  The URL is http://localhost:8084/api/motorcycle.  Click send and the database will be updated.  Lastly, to delete a motorcycle from the database open a new tab, choose DELETE and JSON in the appropriate menus, the add the URL http://localhost:8084/api/motorcycle/{id} to the field.  The {id} is meant to be the id of the bike you wish to delete.  Click enter, and the associated motorcycle will be permanently deleted from the database.  

Please note, the table below can be useful for understanding the REST Endpoints of the implementations.  

## REST Endpoints

|        |                   |   Request Body    |        Response Body        |
| Method |        URI        |(some abbreviated) |     (some abbreviated)      |
| :---:  |       :---:       |       :---:       |            :---:            |
|        |                   |                   |                             |
|  GET   | `/api/motorcycles`|                   | All motorcycles displayed   |
|        |                   |                   |                             |
|  GET   | `/api/motorcycle/ |                   | Single motorcycle displayed |
|        |         {id}`     |                   |                             |
|        |                   |                   |                             |   
|        |                   | "name": STRING    |         "id": INT           |
|        |                   | "year": INT       |      "name": STRING         |
|        |                   | "make": STRING    |      "year": INT            |
|        |                   | "mode": STRING    |      "make": STRING         |
|        |                   | "weight": INT     |      "mode": STRING         |
|        |                   | "load": INT       |      "weight": INT          |
|  POST  | `/api/motorcycle` | "fuelCap": DOUBLE |        "load": INT          |
|        |                   | "fuelCon": DOUBLE |    "fuelCap": DOUBLE        |
|        |                   | "range": INT      |    "fuelCon": DOUBLE        |
|        |                   | "PSI": STRING     |       "range": INT          |
|        |                   | "R-Name": STRING  |        "PSI": STRING        |
|        |                   | "country": STRING |      "R-Name": STRING       |
|        |                   | "region": STRING  |     "country": STRING       |
|        |                   | "R-Length": INT   |     "region": STRING        |
|        |                   | "comments": STRING|      "R-Length": INT        |
|        |                   |                   |      "comments": STRING     |
|        |                   |                   |                             |
|        |                   | "id": INT         |        "id": INT            |
|        |                   | "name": STRING    |       "name": STRING        |
|        |                   | "year": INT       |        "year": INT          |
|        |                   | "make": STRING    |       "make": STRING        |
|        |                   | "mode": STRING    |       "mode": STRING        |
|        |                   | "weight": INT     |       "weight": INT         |
|        |                   | "load": INT       |        "load": INT          |
|  PUT   | `/api/motorcycle` | "fuelCap": DOUBLE |     "fuelCap": DOUBLE       |
|        |                   | "fuelCon": DOUBLE |     "fuelCon": DOUBLE       |
|        |                   | "range": INT      |       "range": INT          |
|        |                   | "PSI": STRING     |       "PSI": STRING         |
|        |                   | "R-Name": STRING  |      "R-Name": STRING       |
|        |                   | "country": STRING |      "country": STRING      |
|        |                   | "region": STRING  |      "region": STRING       |
|        |                   | "R-Length": INT   |       "R-Length": INT       |
|        |                   | "comments": STRING|      "comments": STRING     |
|        |                   |                   |                             |
| DELETE | `/api/motorcycle/ |                   |  Single motorcycle deleted  |
|        |       {id}`       |                   |                             |
