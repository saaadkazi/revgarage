# RevGarage API Documentation

## Base URL

http://localhost:5000

---

## Cars Module

### POST /api/cars

Purpose:
Create a new car record.

Request Body:
```json
{
  "customerId": "customer_id",
  "brand": "Honda",
  "model": "City",
  "year": 2023,
  "numberPlate": "MH12AB1234",
  "color": "White",
  "fuelType": "Petrol"
}

### POST /api/cars

Purpose:
Create a new car.

Request Body:

```json
{
  "customerId": "685000000000000000000000",
  "brand": "Honda",
  "model": "City",
  "year": 2023,
  "numberPlate": "MH12AB1234",
  "color": "White",
  "fuelType": "Petrol"
}
```

Response:

201 Created

# Car APIs

## Create Car

### Endpoint
POST /api/cars

### Request Body

```json
{
    "customerId": "685000000000000000000000",
    "brand": "Honda",
    "model": "City",
    "year": 2023,
    "numberPlate": "MH12AB1234",
    "color": "White",
    "fuelType": "Petrol"
}
```

### Response

```json
{
    "success": true,
    "data": {}
}
```

---

## Get All Cars

### Endpoint

GET /api/cars

### Response

```json
{
    "success": true,
    "count": 1,
    "data": [
        {
            "_id": "...",
            "brand": "Honda",
            "model": "City"
        }
    ]
}
 

 get by car id :

{
    "success": true,
    "data": {
        "_id": "6a314cf4a3e06bf7a255101f",
        "customerId": "685000000000000000000000",
        "brand": "Honda",
        "model": "City",
        "year": 2023,
        "numberPlate": "MH12AB1234",
        "color": "White",
        "fuelType": "Petrol",
        "createdAt": "2026-06-16T13:17:41.010Z",
        "updatedAt": "2026-06-16T13:17:41.010Z",
        "__v": 0
    }
}

## Update Car

### Endpoint

PUT /api/cars/:id

### Request Body

{
    "color": "Black"
}

### Response

{
    "success": true,
    "data": {}
}

AUTHENTICATION :

# Authentication APIs

## Register User

### Endpoint

POST /api/register

### Request Body

```json
{
    "name": "Tanishka",
    "email": "tanishka@gmail.com",
    "password": "123456",
    "role": "admin"
}
```

### Success Response

```json
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "_id": "...",
        "name": "Tanishka",
        "email": "tanishka@gmail.com",
        "role": "admin"
    }
}
```

### Error Response

```json
{
    "success": false,
    "message": "User already exists"
}
```
```
## Login User

### Endpoint

POST /api/login

### Request Body

```json
{
    "email": "tanishka@gmail.com",
    "password": "123456"
}
```

### Success Response

```json
{
    "success": true,
    "message": "Login successful",
    "token": "JWT_TOKEN"
}
```