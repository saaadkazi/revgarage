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
```