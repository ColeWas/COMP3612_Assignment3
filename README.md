# COMP 3612 (Fall 2023)
### Assignment #3: Node API
## Overview
This repository contains code for a F1 API. The assignment makes use of Node and Express to efficiently manage the server
and the possible routes that may be taken. Data for circuits, constructors, drivers, and results for seasons, constructors, drivers
or a combination of season and driver or constructor are able to be fetched from the server. The data is returned in JSON form.

![Node.js](https://img.shields.io/badge/Node.js-22.12.0-green)
![Express](https://img.shields.io/badge/Express-4.21.1-blue)
[![Render Deployment](https://img.shields.io/badge/Deployed%20on-Render.com-orange)](https://colewas-f1-api.onrender.com)

### Example: 
**Request**: `/api/drivers/max_verstappen`  

**Response**:
```json
{
  "driverId": 830,
  "driverRef": "max_verstappen",
  "number": 33,
  "code": "VER",
  "forename": "Max",
  "surname": "Verstappen",
  "dob": "1997-09-30",
  "nationality": "Dutch",
  "url": "http://en.wikipedia.org/wiki/Max_Verstappen"
}
```
## Project Files

| File              | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `F1_API.js`        | Contains the code for the server itself and starts listening for requests. |
| `data_provider.js` | Fetches data from the data folder and exports it for use by the router.    |
| `router.js`        | Handles possible routes, filtering and returning appropriate JSON data.    |

## Testing
- [Render.com Hosting](https://colewas-f1-api.onrender.com)
- [/api/circuits](https://colewas-f1-api.onrender.com/api/circuits)
- [/api/circuits/1](https://colewas-f1-api.onrender.com/api/circuits/1)
- [/api/constructors](https://colewas-f1-api.onrender.com/api/constructors)
- [/api/constructors/mclaren](https://colewas-f1-api.onrender.com/api/constructors/mclaren)
- [/api/coNSTruCTors/mclaren](https://colewas-f1-api.onrender.com/api/coNSTruCTors/mclaren)
- [/api/constructors/javascript (ERROR)](https://colewas-f1-api.onrender.com/api/constructors/javascript)
- [/api/constructorResults/mclaren/2023](https://colewas-f1-api.onrender.com/api/constructorResults/mclaren/2023)
- [/api/constructorResults/MERCEDES/2020](https://colewas-f1-api.onrender.com/api/constructorResults/MERCEDES/2020)
- [/api/constructorResults/mclaren/2040 (ERROR)](https://colewas-f1-api.onrender.com/api/constructorResults/mclaren/2040)
- [/api/constructorResults/comp3612/2023 (ERROR)](https://colewas-f1-api.onrender.com/api/constructorResults/comp3612/2023)
- [/api/drivers](https://colewas-f1-api.onrender.com/api/drivers)
- [/api/drivers/hamilton](https://colewas-f1-api.onrender.com/api/drivers/hamilton)
- [/api/drivers/HAMilton](https://colewas-f1-api.onrender.com/api/drivers/HAMilton)
- [/api/drivers/randy (ERROR)](https://colewas-f1-api.onrender.com/api/drivers/randy)
- [/api/driverResults/piastri/2023](https://colewas-f1-api.onrender.com/api/driverResults/piastri/2023)
- [/api/driverResults/piastri/2002 (ERROR)](https://colewas-f1-api.onrender.com/api/driverResults/piastri/2002)
- [/api/races/season/2023](https://colewas-f1-api.onrender.com/api/races/season/2023)
- [/api/races/seasoning/2023 (ERROR)](https://colewas-f1-api.onrender.com/api/races/seasoning/2023)
- [/api/races/season/2032 (ERROR)](https://colewas-f1-api.onrender.com/api/races/season/2032)
- [/api/results/race/1100](https://colewas-f1-api.onrender.com/api/results/race/1100)
- [/api/results/race/1756348576 (ERROR)](https://colewas-f1-api.onrender.com/api/results/race/1756348576)
- [/api/results/season/2023](https://colewas-f1-api.onrender.com/api/results/season/2023)
- [/api/results/season/2034 (ERROR)](https://colewas-f1-api.onrender.com/api/results/season/2034)

## API Routes
| Route                              | Description                                                                 |
|------------------------------------|-----------------------------------------------------------------------------|
| /api/circuits                      | Returns all circuits.                                                      |
| /api/circuits/id                   | Returns a single circuit specified by the passed circuitId value. e.g., /api/circuits/1 |
| /api/constructors                  | Returns all constructors.                                                  |
| /api/constructors/ref              | Returns a single constructor specified by the passed constructorRef value, e.g., /api/constructors/mclaren |
| /api/constructorResults/ref/year   | Returns the race results for a specified constructor (constructorRef value) and season, e.g., /api/constructorResults/mclaren/2023 |
| /api/drivers                       | Returns all drivers.                                                       |
| /api/drivers/ref                   | Returns a single driver specified by the passed driverRef value, e.g., /api/drivers/piastre |
| /api/driverResults/ref/year        | Returns the race results for a specified driver (driverRef value) and season, e.g., /api/driverResults/piastre/2023 |
| /api/races/season/year             | Returns all the races for the specified season, e.g., /api/races/season/2023 |
| /api/races/id/id                   | Returns just the specified race (raceId value), e.g., /api/races/id/1100   |
| /api/results/race/id               | Returns all the results for the specified race (raceId value), e.g., /api/results/race/1100 |
| /api/results/season/year           | Returns all the results for all the races in the season, e.g., /api/results/season/2023 |
  
