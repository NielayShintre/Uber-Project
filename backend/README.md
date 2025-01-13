# User Routes Documentation

## Base URL

`/users`

## Available Endpoints

### Register User

Register a new user in the system.

#### Endpoint

http
POST /users/register

#### Request Body

Body
json
{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "password123"
}

#### Validation Rules

- Email must be a valid email address
- First name must be at least 3 characters long
- Password must be at least 6 characters long

#### Success Response

**Code**: 201 Created

json
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
"user": {
"id": "65f4a3b2c7d8e9f0a1b2c3d4",
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"socketId": null
}
}

#### Error Responses

**Code**: 400 Bad Request

- When validation fails:

json
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

- When required fields are missing:

json
{
"error": "Email, password, and first name are required"
}

## Implementation Details

The user registration process includes:

1. Input validation using express-validator
2. Password hashing using bcrypt
3. JWT token generation for authentication
4. MongoDB document creation

## Related Files

- Routes: `user-route.js`
- Controller: `user-controller.js`
- Service: `user-service.js`
- Model: `user-model.js`

## Dependencies

- express-validator: For request validation
- bcrypt: For password hashing
- jsonwebtoken: For JWT token generation
- mongoose: For database operations
