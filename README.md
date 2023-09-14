# Legal Doctrine Backend Challenge

## Setup

### 1- In Your Environment

- Add .env file in the root of the project with the following variables:
    - MONGO_URI (MongoDB connection string)
    - JWT_SECRET (JWT secret key)   
    - JWT_EXPIRE_IN (JWT expiration time in seconds)
    - JWT_EXPIRE_SHORT (JWT expiration time in seconds for short lived tokens)
- Run `npm install` to install all dependencies
- Run `npm start` to start the server

### 2- Using Docker

- Install Docker and Docker Compose Link [here](https://docs.docker.com/get-docker/)

- Run `docker-compose build` to build the image

- Run `docker-compose up` to start the server

### Seed Data

- Run `npm run seed` to seed the database with some random data

## API Documentation

### Swagger Documentation

- Swagger documentation is available at `/api-docs`

- You can some sample requests in the swagger documentation

### Postman Collection

- Postman collection is available at `docs/Legal Doctrine Challenge.postman_collection.json`

- You can import the collection in Postman and use it to test the API

### Authentication

- Authentication is done using Bearer JWT tokens

- You can get a token by sending a POST request to `/api/v1/auth/login` with the following body:

```json
{
  "email": "userone@gmail.com",
  "password": "userone"
}
```

- Or you can register a new user by sending a POST request to `/api/v1/auth/register` with the following body:

```json
{
  "email": "email@example.com",
  "password": "password"
}
```

- You can use the token to access protected routes by adding it to the `Authorization` header as a bearer token

### Routes

- All routes are prefixed with `/api/v1`

- Product routes are prefixed with `/products`

- Purchase routes are prefixed with `/purchases`

- Authentication routes are prefixed with `/auth`

- Card routes are prefixed with `/cards` (External API Integration)

- Some routes are only available to admin users such as creating a new product, updating, or deleting a product

### Database Schema

- Product Schema

```json
{
  "_id": "60fddc1b7f0b3a1e3c7b0b1e",
  "name": "Product Name",
  "category": "Product Category",
  "price": 100,
  "createdAt": "2023-07-25T15:00:00.000Z",
  "updatedAt": "2023-07-25T15:00:00.000Z"
}
```

Each product is defined by a unique id, a name, a category, a price, and a creation date.

- Purchase Schema

```json
{
  "_id": "60fddc1b7f0b3a1e3c7b0b1e",
  "product": "60fddc1b7f0b3a1e3c7b0b1e",
  "user": "60fddc1b7f0b3a1e3c7b0b1e",
  "quantity": 2,
  "createdAt": "2023-07-25T15:00:00.000Z",
  "updatedAt": "2023-07-25T15:00:00.000Z"
}
```

Each purchase is defined by a unique id, a product id (purchased product), a user id (user who made the purchase), a quantity, and a creation date.

- User Schema

```json
{
  "_id": "60fddc1b7f0b3a1e3c7b0b1e",
  "email": "user@user.com",
  "password": "hashedPassword",
  "isAdmin": false
}
```

Each user is defined by a unique id, an email, a hashed password, and a boolean value indicating whether the user is an admin or not.

### Usefull Information

- Admin user credentials: 
```json
{
  "email": "admin@admin.com",
  "password": "adminadmin"
}
```

- Simple user credentials: 
```json
{
  "email": "userone@gmail.com",
  "password": "userone"
}
```