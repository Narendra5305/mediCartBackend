Medicare Store Backend API

Overview:
This project is an Express.js-based REST API for managing products, users, and orders in the Medicare Store e-commerce application. It includes secure user authentication and role-based access control (RBAC) to protect sensitive operations.

Middleware:
- Authentication (auth): Ensures routes are accessed only by authenticated users.
- Role-Based Access Control (rbac): Restricts actions based on user roles (e.g., admin only).

API Endpoints:

Product Routes:
- GET    /products/          : Fetch all products (Public)
- POST   /products/upload    : Add a new product (Public)
- PATCH  /products/          : Update product data (Admin only)
- DELETE /products/          : Delete a product (Admin only)

User Routes:
- GET    /users/             : Fetch all users (Admin only)
- GET    /users/:id          : Fetch user profile (Authenticated users)
- POST   /users/signup       : Register new user (Public)
- POST   /users/signin       : User login (Public)
- PATCH  /users/:id          : Update user details (Authenticated users)
- DELETE /users/:id          : Delete a user (Admin only)

Order Routes:
- GET    /orders/            : Fetch all orders (Authenticated users)
- POST   /orders/            : Create new order (Authenticated users)
- PATCH  /orders/:id         : Update order (Authenticated users)
- DELETE /orders/:id         : Delete order (Admin only)

Technologies Used:
- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication
- Middleware for authentication and role-based authorization

Setup Instructions:
1. Install dependencies with `npm install`.
2. Configure environment variables for JWT secrets and MongoDB connection.
3. Run the server with `npm start`.
4. Use API endpoints to manage Medicare Store data.

