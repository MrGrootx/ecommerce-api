# 🛒 E-Commerce API

## 📌 Overview
This API provides endpoints for managing products, orders, and user authentication in an e-commerce platform.

## 🔗 API Endpoints

### 🏷️ Products
- **Create Product**  
  `POST` - `http://localhost:3000/api/v1/products`
- **Get All Products**  
  `GET` - `http://localhost:3000/api/v1/products`
- **Get Product by ID**  
  `GET` - `http://localhost:3000/api/v1/products/{productId}`
- **Update Product**  
  `PUT` - `http://localhost:3000/api/v1/products/{productId}`
- **Delete Product**  
  `DELETE` - `http://localhost:3000/api/v1/products/{productId}`

#### 📌 Example Product JSON
```json
{
  "_id": "6650ba7b8aca58d7ed510f9d",
  "name": "Wireless Earbuds",
  "description": "Compact and comfortable earbuds with noise cancellation and long battery life.",
  "price": 79.99,
  "category": "Electronics",
  "tags": ["audio", "portable", "wireless", "earbuds"],
  "variants": [
    {
      "type": "color",
      "value": "Black"
    },
    {
      "type": "color",
      "value": "White"
    }
  ],
  "inventory": {
    "quantity": 150,
    "inStock": true
  }
}
```

### 📦 Orders
- **Create Order**  
  `POST` - `http://localhost:3000/api/v1/orders/create-order`
- **Get All Orders by Email**  
  `GET` - `http://localhost:3000/api/v1/orders?email={userEmail}`

#### 📌 Example Create Order JSON
```json
{
  "email": "groot@gmail.com",
  "productId": "67c947f88220525dca10a060",
  "quantity": 15,
  "price": 5000
}
```

### 👤 Users
- **Register User**  
  `POST` - `http://localhost:3000/api/v1/users/register`
- **Login User**  
  `POST` - `http://localhost:3000/api/v1/users/login`

#### 📌 Example Register JSON
```json
{
  "email": "mrgroot@gmail.com",
  "password": "1234",
  "role": "admin"
}
```

#### 📌 Example Login JSON
```json
{
  "email": "mrgroot@gmail.com",
  "password": "1234"
}
```

## 🛠️ Technologies Used
- **TypeScript**
- **MongoDB**
- **PNPM**

## 📦 Packages Used
- **bcryptjs** - Used for hashing and verifying passwords securely.
- **body-parser** - Middleware to parse incoming request bodies in JSON format.
- **cors** - Enables Cross-Origin Resource Sharing for handling requests from different domains.
- **dotenv** - Loads environment variables from a `.env` file.
- **express** - A minimal and flexible Node.js web application framework.
- **jsonwebtoken** - Used for generating and verifying JSON Web Tokens (JWT) for authentication.
- **mongoose** - ODM (Object Data Modeling) library for MongoDB, providing schema-based models.
- **zod** - A TypeScript-first schema validation library for input validation.

## ⚙️ Environment Variables

```plaintext
PORT=3000
MONGODB="mongodb://localhost:27017/ecommerce-api"
JWT_SECRET="grootdevelopmentpvt"
```

