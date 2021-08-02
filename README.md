# EventTrackerProject

### Full-Stack Spring/REST/JPA Project for Skill Distillery

### Overview
* TODO: description

## REST Endpoints


|        |                   |   Request Body    |        Response Body        |
| Method |        URI        |(some abbreviated) |     (some abbreviated)      |
|--------|-------------------|-------------------|-----------------------------|
|  GET   | `/api/motorcycles`|                   | All motorcycles displayed   |
|  GET   | `/api/motorcycle/ |                   | Single motorcycle displayed |
|        |        {id}`      |                   |                             |
|        |                   | "name": STRING    |        "id": INT            |
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
|        |                   |                   |    "comments": STRING       |
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
| DELETE | `/api/motorcycle/ |                   |  Single motorcycle deleted  |
|        |       {id}`       |                   |                             |
