# Backend API Documentation

## Overview

This API provides user authentication services including registration and login functionality. It uses JWT (JSON Web Token) for authentication and implements secure password hashing.

## Base URL

http://localhost:3000/users

## Authentication

Authentication is handled via JWT tokens. Include the token in the Authorization header:

Authorization: Bearer <token>

## Endpoints

### 1. Register User

Create a new user account.

**Endpoint:** `POST /users/register`

**Request Body:**

json:backend/README.md
{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "password123"
}

**Validation Rules:**

- Email must be a valid email address
- First name must be at least 3 characters long
- Password must be at least 6 characters long

**Success Response:**

- Status Code: `201 Created`

**Error Responses:**

- Status Code: `400 Bad Request`
  - Validation Errors:
    ```json
    {
      "errors": [
        {
          "type": "field",
          "msg": "Invalid Email",
          "path": "email",
          "location": "body"
        }
      ]
    }
    ```
  - Missing Required Fields:
    ```json
    {
      "error": "Email, password, and first name are required"
    }
    ```

### 2. Login User

Authenticate an existing user.

**Endpoint:** `POST /users/login`

**Request Body:**

json
{
"email": "john.doe@example.com",
"password": "password123"
}

**Validation Rules:**

- Email must be a valid email address
- Password must be at least 6 characters long

**Success Response:**

- Status Code: `200 OK`

**Error Responses:**

- Status Code: `401 Unauthorized`
  ```json
  {
    "error": "Invalid credentials"
  }
  ```
- Status Code: `400 Bad Request`

  ```json
  {
    "errors": [
      {
        "type": "field",
        "msg": "Invalid Email",
        "path": "email",
        "location": "body"
      }
    ]
  }
  ```

### 3. Get User Profile

Retrieve the authenticated user's profile information.

**Endpoint:** `GET /users/profile`

**Authentication Required:** Yes (JWT token in Authorization header)

**Success Response:**

- Status Code: `200 OK`
- Response Body:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

**Error Responses:**

- Status Code: `401 Unauthorized`
  ```json
  {
    "error": "You are not logged in"
  }
  ```

### 4. Logout User

Logout the currently authenticated user and invalidate their token.

**Endpoint:** `GET /users/logout`

**Authentication Required:** Yes (JWT token in Authorization header)

**Success Response:**

- Status Code: `200 OK`
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

**Error Responses:**

- Status Code: `401 Unauthorized`

  ```json
  {
    "error": "You are not logged in"
  }
  ```

### 5. Register Captain

Create a new captain account with vehicle details.

**Endpoint:** `POST /captains/register`

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

**Validation Rules:**

- Email must be a valid email address
- First name must be at least 3 characters long
- Password must be at least 6 characters long
- Vehicle color must be at least 3 characters long
- Vehicle plate must be at least 7 characters long
- Vehicle capacity must be at least 1
- Vehicle type must be one of: "Car", "Motorbike", "Auto"

**Success Response:**

- Status Code: `201 Created`
- Response Body:

```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "Car"
    }
  },
  "token": "jwt_token"
}
```

**Error Responses:**

- Status Code: `400 Bad Request`
  - Validation Errors:
    ```json
    {
      "errors": [
        {
          "type": "field",
          "msg": "Invalid Email",
          "path": "email",
          "location": "body"
        }
      ]
    }
    ```
  - Duplicate Email:
    ```json
    {
      "error": "Captain already exists"
    }
    ```
  - Missing Required Fields:
    ```json
    {
      "error": "All fields are required"
    }
    ```

### 3. Get Captain Profile

Retrieve the authenticated captain's profile information.

**Endpoint:** `GET /captains/profile`

**Authentication Required:** Yes (JWT token in Authorization header)

**Success Response:**

- Status Code: `200 OK`
- Response Body:
  ```json
  {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
  ```

**Error Responses:**

- Status Code: `401 Unauthorized`
  ```json
  {
    "error": "You are not logged in"
  }
  ```

### 4. Logout Captain

Logout the currently authenticated captain and invalidate their token.

**Endpoint:** `GET /captains/logout`

**Authentication Required:** Yes (JWT token in Authorization header)

**Success Response:**

- Status Code: `200 OK`
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

**Error Responses:**

- Status Code: `401 Unauthorized`
  ```json
  {
    "error": "You are not logged in"
  }
  ```

## Technical Implementation

### Security Features

1. Password Hashing: Implemented using bcrypt with 10 rounds of salting
2. JWT Token Generation: Tokens are signed using a secure secret key
3. Input Validation: Request validation using express-validator
4. MongoDB Unique Indexes: Prevents duplicate email addresses

### Dependencies

- express-validator: Request validation
- bcrypt: Password hashing
- jsonwebtoken: JWT token generation/validation
- mongoose: MongoDB ODM
- express: Web framework
- cors: Cross-Origin Resource Sharing

### Environment Variables

Required environment variables:

- `PORT`: Server port (default: 3000)
- `JWT_SECRET`: Secret key for JWT signing
- `DB_CONNECT`: MongoDB connection string

### Error Handling

The API implements comprehensive error handling for:

- Validation errors
- Authentication failures
- Database conflicts
- Missing required fields
- Server errors
