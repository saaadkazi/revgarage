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