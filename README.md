# EventTrackerProject

### Full-Stack Spring/REST/JPA Project for Skill Distillery
### By Shaun Reass

### Overview

This full-stack application provides a platform on which a user can create, update, and delete motorcycles and associated specifications, as well as information on riding routes.  

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
* JavaScript

### How to Run

There is currently one webpage associated with this project.  On it, the user will be able to create, read, update, and delete motorcycles with various specifications and information on riding routes.  When landing on the page, the user will notice there are three columns: 1) create your ride, view existing rides, and ride specs.  To create a ride, a user enters associated data into the text fields of the "create your ride" column and clicks the "create" button.  Doing so will store the associated data to the database, while displaying the new motorcycle under the "view existing rides" column.  Each of the bikes in this column are viewable by clicking the named button associated with a particular motorcycle.  The column labeled "ride specs" is initially blank when first landing on the page.  The only part visible is the column title.  After a user chooses a motorcycle to view, the column will populate specs associated with the motorcycle.  At the bottom of the column are two buttons, one for updating a motorcycle and another for deleting.  When the user chooses to update a motorcycle, they will be able to do so in the text fields of the "create your ride column," where information tied to the bike will already be pre-populated.  When the user completes entering updates, clicking the "update" button at the bottom of the fields will cause the updates to take effect.  Choosing the delete button at the bottom of the 'ride specs' column will delete the bike and associated data from the database, and it will no longer be visible in the "view existing rides" column.

Additionally, aggregation data is displayed in the upper left corner of the page, including: 1) total creations, 2) total updates, and 3) total deletions.  

Please note, the table below can be useful for understanding the REST Endpoints of the implementations.  

## REST Endpoints


| Method |        URI        |Request Body (some abbreviated) | Response Body (some abbreviated) |
| :---:  |       :---:       |       :---:       |            :---:            |
|        |                   |                   |                             |
|  GET   | `/api/motorcycles`|                   | All motorcycles displayed   |
|        |                   |                   |                             |
|  GET   | `/api/motorcycle/{id}` |                   | Single motorcycle displayed |
|        |                   |                   |                             |
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
| DELETE | `/api/motorcycle/{id}` |                   |  Single motorcycle deleted  |
|        |                   |                   |                             |

### Challenges

The main challenge in the initial portion of the project was not being familiar with some of the technologies used, mainly Postman.  After familiarizing myself with it, the testing process became much simpler.  Additionally, while using the repositories can save a lot of time and typing, it is not something which happens automatically.  "Connecting the dots" took some time and thought to get right.  With regard to the JavaScript portion of the front-end, being so new to JavaScript was the overall challenge.  I initially started writing the JavaScript in Eclipse, but was having significant problems with the lack of text coloration (it was all gray).  It did not take long to switch to VS Code, which was much more user-friendly and responsive.  

###  Lessons Learned

When I first started planning this project and designing the database schema, my initial thought was to include multiple tables.  Ultimately, based on guidance from instructors, I chose a single table database was best for the amount of time allotted.  This saved a lot of time during this portion of the project, and as the application progresses in subsequent weekend portions, I have no doubt it will become even more apparent a single table database was a good choice, while still allowing for a rich application.  While working in VS code was much more user-friendly, it still took me a while to become accustomed to local versus global relationships for parts of the code.  From what I gathered, the use of ".reset" was causing a reloading error on my webpage every time I submitted information.  It was overcome by moving code snippets to the top of the .js file., but took some time to resolve.  
