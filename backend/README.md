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
