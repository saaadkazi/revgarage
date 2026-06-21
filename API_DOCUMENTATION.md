# RevGarage API Documentation

## Project Title
RevGarage - Role Based Service Management System

## Project Overview
RevGarage is a backend-based automobile workshop management system designed to manage service operations efficiently.

This system provides APIs for:
- User Authentication
- Customer Management
- Car Management
- Modification Management
- Work Order Management
- Invoice Management

All major APIs are protected using JWT Authentication.

CRUD Operations used:
- Create → POST
- Read → GET
- Update → PUT
- Delete → DELETE

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- Postman

---

## Base URL

```text
http://localhost:8000
```

---

# Collaboration Details

## Saad Contributions
- Customer CRUD APIs
- Modification CRUD APIs
- Invoice APIs
- Branch Merge & Conflict Resolution
- Final Project Integration
- Postman Testing & Collection

## Tanishka Contributions
- Authentication APIs
- Car CRUD APIs
- WorkOrder CRUD APIs

---

# Folder Structure

```bash
RevGarage/
│
├── config/
├── controller/
├── middleware/
├── models/
├── routes/
├── .env
├── .gitignore
├── package.json
└── index.js
```

---

# Models Used

## User Model
Purpose:
Stores user authentication details.

Fields:
- name
- email
- password
- role

Used for:
- Registration
- Login
- Authentication

---

## Customer Model
Purpose:
Stores customer details.

Fields:
- name
- email
- phone

Used for:
- Customer management
- Customer lookup

---

## Car Model
Purpose:
Stores vehicle details.

Fields:
- customerId
- brand
- model
- year
- numberPlate
- color
- fuelType

Used for:
- Vehicle tracking
- Service history

---

## Modification Model
Purpose:
Stores vehicle modification records.

Used for:
- Custom modification requests
- Workshop modification tracking

---

## WorkOrder Model
Purpose:
Tracks service jobs.

Used for:
- Repair tracking
- Job status management

---

## Invoice Model
Purpose:
Stores billing data.

Used for:
- Payment records
- Invoice generation


# Authentication APIs

## Register User

Endpoint:
```text
POST /api/register
```

Controller Function:
`register()`

Purpose:
Creates a new user.

Request Body:
```json
{
  "name": "Saad",
  "email": "saad@gmail.com",
  "password": "123456",
  "role": "admin"
}
```

---

## Login User

Endpoint:
```text
POST /api/login
```

Controller Function:
`login()`

Purpose:
Authenticates user and generates JWT token.

Response:
```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

---

## Get Profile

Endpoint:
```text
GET /api/profile
```

Protected:
Yes

Controller Function:
`getProfile()`

Purpose:
Returns logged in user profile.


# Customer APIs

POST /api/customers → createCustomer() → Creates customer  
GET /api/customers → getCustomers() → Fetch all customers  
GET /api/customers/:id → getCustomerById() → Fetch customer by ID  
PUT /api/customers/:id → updateCustomer() → Update customer  
DELETE /api/customers/:id → deleteCustomer() → Delete customer  

---

# Modification APIs

POST /api/modifications → createModification() → Create modification  
GET /api/modifications → getModifications() → Get all modifications  
GET /api/modifications/:id → getModificationById() → Get by ID  
PUT /api/modifications/:id → updateModification() → Update modification  
DELETE /api/modifications/:id → deleteModification() → Delete modification  

---

# Invoice APIs

POST /api/invoices → createInvoice() → Create invoice  
GET /api/invoices → getInvoices() → Get all invoices  
GET /api/invoices/:id → getInvoiceById() → Get invoice by ID  


# Car APIs

POST /api/cars → createCar() → Create car  
GET /api/cars → getAllCars() → Get all cars  
GET /api/cars/:id → getCarById() → Get car by ID  
PUT /api/cars/:id → updateCar() → Update car  
DELETE /api/cars/:id → deleteCar() → Delete car  

---

# WorkOrder APIs

POST /api/workorders → createWorkOrder() → Create work order  
GET /api/workorders → getAllWorkOrders() → Get all work orders  
GET /api/workorders/:id → getWorkOrderById() → Get work order by ID  
PUT /api/workorders/:id → updateWorkOrder() → Update work order  
DELETE /api/workorders/:id → deleteWorkOrder() → Delete work order  


# Protected Routes

All major API routes in RevGarage are protected using JWT (JSON Web Token) authentication middleware to ensure secure access to sensitive resources.

## Authentication Header Format

```text
Authorization: Bearer JWT_TOKEN
```

## Middleware Used

```text
middleware/authMiddleware.js
```

## Middleware Responsibilities

The authentication middleware performs the following tasks:

* Extracts JWT token from the Authorization header
* Verifies token using JWT secret key
* Decodes authenticated user information
* Attaches user data to `req.user`
* Grants access only to authorized users
* Returns error response for invalid or missing tokens

Example error response:

```json
{
  "success": false,
  "message": "Invalid token"
}
```

---

# GitHub Repository Link

https://github.com/saaadkazi/revgarage

---

# Postman Collection Link

https://saadkazi0901-381061.postman.co/workspace/Saad-Kazi's-Workspace~ba2a533c-6bef-48c5-85b5-f73dda3ea51c/folder/55486250-4221627f-6ab1-473f-bafa-ae5e1acb1ed1?action=share&source=copy-link&creator=55486250

---

# Conclusion

RevGarage successfully implements a complete backend service management system for automobile workshops using Node.js, Express.js, and MongoDB.

Project Features:

* Role-based authentication using JWT
* Protected CRUD APIs
* Customer management
* Vehicle management
* Modification tracking
* Work order management
* Invoice generation

This project demonstrates practical implementation of:

* REST API development
* MongoDB schema design
* Authentication & authorization
* Team collaboration using Git & GitHub
* API testing using Postman
