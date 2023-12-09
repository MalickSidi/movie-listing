# Movie Listing API System

## Setup

1. make sure all dependancies are installed using command:
```bash
npm i
```

2. Setup MongoDB database and get connection uri
3. create `.env` file and add `DB_URI` variable for database connection
```bash
DB_URI=mongodb://databaseconnection_uri
```
3. Connect to the API using the default port: `http://localhost:8800/` 

If you want to connect to different PORT You can add `PORT` variable to the `.env` file.

## API endpints
### Movie
#### 1. List available movies
```http
GET http://localhost:8800/api/v1/movies 
```
Use `HTTP GET` metod to find the list of all available movies.
#### 2. Find Movie
```http 
GET http://localhost:8800/api/v1/movies/{id}
```

Use `HTTP GET` method to find spicific movie using the `{id}`.

#### 3. Create new Movie
```http
POST http://localhost:8800/api/v1/movies 
```
__Body required field__: `name`

Using `HTTP POST` method you can create new Movie. Movie name is required.

#### 4. Update Movie
```http
PUT http://localhost:8800/api/v1/movies/{id}
```

Using `HTTP PUT` method you can update Movie. Movie `ID` is required.

#### 5. Delete Movie
```http
DELETE http://localhost:8800/api/v1/movies/{id}
```

Using `HTTP DELETE` method you can Delete Movie. Movie `ID` is required.

---

### Timeslots
#### 1. List available Timeslots
```http
GET http://localhost:8800/api/v1/timeslots
```
Use `HTTP GET` metod to find the list of all available timeslots.
#### 2. Find Timeslots
```http 
GET http://localhost:8800/api/v1/timeslots/{id}
```

Use `HTTP GET` method to find spicific timeslot using the `{id}`.

#### 3. Create new Timeslot
```http
POST http://localhost:8800/api/v1/timeslots 
```
__Body required field__: `name`

Using `HTTP POST` method you can create new Timeslot. Timeslot name is required.

#### 4. Update Timeslots
```http
PUT http://localhost:8800/api/v1/timeslots/{id}
```

Using `HTTP PUT` method you can update Timeslot. Timeslots `ID` is required.

#### 5. Delete Timeslot
```http
DELETE http://localhost:8800/api/v1/timeslots/{id}
```

Using `HTTP DELETE` method you can Delete Timeslot. Timeslot `ID` is required.

---

### Reservation
#### 1. List available Reservations
```http
GET http://localhost:8800/api/v1/reservations
```
Use `HTTP GET` metod to find the list of all available reservations.
#### 2. Find Reservations
```http 
GET http://localhost:8800/api/v1/reservations/{id}
```

Use `HTTP GET` method to find spicific Reservations using the `{id}`.

#### 3. Create new Reservations
```http
POST http://localhost:8800/api/v1/reservations 
```
__Body required field__: `Movie`, `Timeslot`

Using `HTTP POST` method you can create new Reservations.

#### 4. Update Reservations
```http
PUT http://localhost:8800/api/v1/reservations/{id}
```

Using `HTTP PUT` method you can update Reservations. Reservations `ID` is required.

#### 5. Delete Reservations
```http
DELETE http://localhost:8800/api/v1/reservations/{id}
```

Using `HTTP DELETE` method you can Delete Reservations. Reservations `ID` is required.
