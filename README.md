# Syntecxhub Product CRUD API

A RESTful Product Management API built with **Node.js** and **Express.js** as part of **Syntecxhub Project 2 — Product CRUD API**. This project demonstrates how to create, retrieve, update, and delete products, with additional support for category filtering, price filtering, pagination, input validation, and error handling.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Project Objectives](#2-project-objectives)
3. [Features](#3-features)
4. [Technologies Used](#4-technologies-used)
5. [Project Structure](#5-project-structure)
6. [Prerequisites](#6-prerequisites)
7. [Installation and Setup](#7-installation-and-setup)
8. [Running the Server](#8-running-the-server)
9. [API Base URL](#9-api-base-url)
10. [Product Data Structure](#10-product-data-structure)
11. [API Endpoints](#11-api-endpoints)
12. [Filtering and Pagination](#12-filtering-and-pagination)
13. [Error Handling](#13-error-handling)
14. [Testing with Postman](#14-testing-with-postman)
15. [Git and GitHub Setup](#15-git-and-github-setup)
16. [Data Storage and Limitations](#16-data-storage-and-limitations)
17. [Future Improvements](#17-future-improvements)
18. [Author and Project Information](#18-author-and-project-information)

---

## 1. Project Overview

The Product CRUD API is a backend application that provides HTTP endpoints for managing product information.

CRUD stands for:

- **Create:** Add a new product.
- **Read:** Retrieve one or more products.
- **Update:** Modify an existing product.
- **Delete:** Remove a product.

The API is designed using a modular structure that separates route definitions from controller logic. This improves readability, organization, maintainability, and future extensibility.

The project was developed as a learning exercise to practice REST API development, HTTP methods and status codes, request validation, query parameters, error handling, API testing, and GitHub version control.

### Project details

| Item | Description |
|---|---|
| Project | Project 2 — Product CRUD API |
| Organization | Syntecxhub |
| Application type | RESTful backend API |
| Runtime | Node.js |
| Framework | Express.js |
| Data storage | In-memory JavaScript array |
| API testing | Postman |
| Version control | Git |
| Repository hosting | GitHub |

## 2. Project Objectives

The main objectives of this project are to:

1. Build a REST API using Node.js and Express.js.
2. Implement CRUD operations for products.
3. Organize application logic using routes and controllers.
4. Validate incoming product data.
5. Support filtering products by category and price.
6. Implement pagination using query parameters.
7. Handle invalid requests and missing resources gracefully.
8. Test endpoints using Postman.
9. Manage source code using Git and GitHub.
10. Document installation, configuration, and usage for other developers.

## 3. Features

### Product management

- Create new products.
- Retrieve all products.
- Retrieve a product by its ID.
- Update an existing product.
- Delete a product by its ID.

### Filtering and pagination

- Filter products by category.
- Filter products using a minimum price.
- Filter products using a maximum price.
- Combine minimum and maximum price filters.
- Request paginated results using page and limit parameters.

### Validation and error handling

- Validate required product fields.
- Reject invalid product data.
- Return appropriate errors when a product does not exist.
- Handle unknown routes.
- Handle malformed JSON request bodies.
- Return a generic response for unexpected server errors.

### Development workflow

- Use Nodemon for automatic server restarts during development.
- Test API endpoints through Postman.
- Maintain source code in a GitHub repository.
- Provide setup and usage instructions in this README.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for the backend |
| Express.js | HTTP server and routing framework |
| JavaScript | Application logic |
| npm | Dependency and package management |
| Nodemon | Automatically restarts the development server |
| Postman | Sends HTTP requests and verifies API responses |
| Git | Tracks changes to source code |
| GitHub | Hosts and shares the project repository |
| Visual Studio Code | Code editor and integrated terminal |

**Database note:** The current implementation uses an in-memory array rather than MongoDB or Mongoose. These are possible future enhancements, not dependencies of the current version.

## 5. Project Structure

The repository is organized as follows:

```text
Syntecxhub_Product_Crud_API/
│
├── controllers/
│   └── productController.js
│
├── routes/
│   └── productRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### File and folder descriptions

**`server.js`**

The main application entry point. It initializes Express, enables JSON request parsing, registers product routes, and configures error handling and the server port.

**`routes/productRoutes.js`**

Defines the product endpoints and connects each endpoint to its corresponding controller function.

**`controllers/productController.js`**

Contains the logic for creating, retrieving, filtering, updating, and deleting products, along with request validation and missing-resource handling.

**`package.json`**

Contains project metadata, dependencies, and commands for starting the application.

**`package-lock.json`**

Records the resolved dependency versions for more consistent installations.

**`.gitignore`**

Excludes files and directories that should not be committed to GitHub, such as `node_modules`.

**`README.md`**

Documents the project, setup instructions, endpoints, testing procedure, and repository workflow.

## 6. Prerequisites

Before installing the project, ensure the following software is available on your computer:

- **Node.js:** Install a current supported LTS release.
- **npm:** Installed with Node.js.
- **Visual Studio Code:** For editing and managing project files.
- **Git:** For version control and pushing the project to GitHub.
- **Postman:** For testing API requests.
- **GitHub account:** For hosting the repository.

Verify your Node.js and npm installations by opening a terminal:

```bash
node -v
npm -v
```

Verify Git:

```bash
git --version
```

If these commands display version numbers, the corresponding tools are installed.

## 7. Installation and Setup

### Step 1: Create the project folder

Create a folder named:

```text
Syntecxhub_Product_Crud_API
```

For a Desktop-based setup, place the folder on your Desktop.

### Step 2: Open the folder in Visual Studio Code

1. Open Visual Studio Code.
2. Select **File → Open Folder**.
3. Navigate to your Desktop.
4. Select `Syntecxhub_Product_Crud_API`.
5. Open the integrated terminal using **Terminal → New Terminal**.

Make sure the terminal is operating inside the project folder before continuing.

### Step 3: Initialize the Node.js project

Run:

```bash
npm init -y
```

This creates the initial `package.json` file.

### Step 4: Install Express

Run:

```bash
npm install express
```

Express provides the routing and HTTP server functionality.

### Step 5: Install Nodemon

Run:

```bash
npm install --save-dev nodemon
```

Nodemon monitors source files and restarts the development server when changes are detected.

### Step 6: Configure package scripts

Open `package.json` and ensure the scripts section contains:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Keep the other existing fields and dependencies in `package.json`. Do not replace the entire file with only the scripts section.

### Step 7: Create the source files

Create the following files and folders in Visual Studio Code:

- `controllers/productController.js`
- `routes/productRoutes.js`
- `server.js`
- `.gitignore`
- `README.md`

Add the corresponding application code to each JavaScript file.

### Step 8: Configure `.gitignore`

Add the following:

```gitignore
node_modules/
.env
.DS_Store
npm-debug.log*
```

This prevents common generated files and local environment configuration from being tracked by Git.

### Step 9: Verify the installation

Run:

```bash
npm install
```

This installs the dependencies declared in `package.json` and uses the lockfile when available.

## 8. Running the Server

### Development mode

Run:

```bash
npm run dev
```

Nodemon starts the server and restarts it when source files change.

### Standard mode

Run:

```bash
npm start
```

This starts the application using Node.js directly.

When the server starts successfully, the terminal should display a message similar to:

```text
Server running at http://localhost:3000
```

Keep the terminal running while testing the API.

To stop the server, press `Ctrl + C` in the terminal.

## 9. API Base URL

The default local base URL is:

```text
http://localhost:3000
```

The main product endpoint is:

```text
http://localhost:3000/api/products
```

The application uses port `3000` by default. If the `PORT` environment variable is set, the server uses that value instead.

You can verify that the server is responding by opening the base URL in your browser:

```text
http://localhost:3000/
```

The root endpoint returns a welcome message and identifies the main product endpoint.

## 10. Product Data Structure

Each product contains the following fields:

| Field | Type | Description |
|---|---|---|
| `id` | Number | Unique identifier assigned by the application |
| `name` | String | Product name |
| `price` | Number | Product price |
| `description` | String | Description of the product |
| `category` | String | Product category |

Example product:

```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "price": 25.99,
  "description": "Ergonomic wireless mouse",
  "category": "Electronics"
}
```

The `id` is assigned by the application when a product is created. Clients should provide the other product fields when creating a product.

## 11. API Endpoints

All product endpoints use the `/api/products` route prefix.

### Endpoint summary

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Display the API welcome message |
| GET | `/api/products` | Retrieve all products |
| POST | `/api/products` | Create a product |
| GET | `/api/products/:id` | Retrieve a product by ID |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/products?category=Electronics` | Filter by category |
| GET | `/api/products?minPrice=20` | Filter by minimum price |
| GET | `/api/products?maxPrice=30` | Filter by maximum price |
| GET | `/api/products?page=1&limit=5` | Retrieve a page of products |

### 11.1 Get the API welcome message

**Request**

```http
GET /
```

Full URL:

```text
http://localhost:3000/
```

Purpose: Confirms that the API server is responding.

Expected status: `200 OK`.

### 11.2 Get all products

**Request**

```http
GET /api/products
```

Full URL:

```text
http://localhost:3000/api/products
```

Purpose: Retrieves the product collection, subject to any supported query parameters.

Expected status: `200 OK`.

### 11.3 Create a product

**Request**

```http
POST /api/products
```

Full URL:

```text
http://localhost:3000/api/products
```

Set the request body to JSON:

```json
{
  "name": "Wireless Mouse",
  "price": 25.99,
  "description": "Ergonomic wireless mouse",
  "category": "Electronics"
}
```

Purpose: Creates a product after validating the submitted fields.

Expected status: `201 Created`.

### 11.4 Get a product by ID

**Request**

```http
GET /api/products/1
```

Full URL:

```text
http://localhost:3000/api/products/1
```

Purpose: Retrieves the product with the specified ID.

Expected status: `200 OK` when the product exists, or `404 Not Found` when it does not.

Replace `1` with the actual ID returned when you create your product.

### 11.5 Update a product

**Request**

```http
PUT /api/products/1
```

Full URL:

```text
http://localhost:3000/api/products/1
```

Request body:

```json
{
  "name": "Wireless Mouse Pro",
  "price": 35.99,
  "description": "Updated ergonomic wireless mouse",
  "category": "Electronics"
}
```

Purpose: Replaces the product's supplied fields with the new values.

The current implementation requires all four product fields for a successful update.

Expected status: `200 OK` when the product exists and the input is valid.

### 11.6 Delete a product

**Request**

```http
DELETE /api/products/1
```

Full URL:

```text
http://localhost:3000/api/products/1
```

Purpose: Deletes the product with the specified ID.

Expected status: `200 OK` if the controller returns a success response after deletion, or `404 Not Found` if the product does not exist.

Use the actual product ID. Deleting a product removes it from the in-memory collection.

## 12. Filtering and Pagination

The API supports query parameters to narrow the returned product list.

### Filter by category

```http
GET /api/products?category=Electronics
```

Returns products in the Electronics category.

### Filter by minimum price

```http
GET /api/products?minPrice=20
```

Returns products whose prices are at least `20`.

### Filter by maximum price

```http
GET /api/products?maxPrice=30
```

Returns products whose prices are no greater than `30`.

### Filter by a price range

```http
GET /api/products?minPrice=20&maxPrice=50
```

Returns products priced between `20` and `50`, inclusive.

### Combine category and price filters

```http
GET /api/products?category=Electronics&minPrice=20&maxPrice=100
```

This combines the category and price conditions.

### Pagination

```http
GET /api/products?page=1&limit=5
```

The parameters mean:

- `page`: The requested page number.
- `limit`: The maximum number of products requested per page.

For example:

```text
/api/products?page=2&limit=5
```

requests the second page with up to five products.

Pagination is most useful when a collection contains many products. The exact response format depends on the controller implementation.

## 13. Error Handling

The application includes handling for common API errors.

| Situation | Expected status | Meaning |
|---|---|---|
| Valid GET request | `200 OK` | The request succeeded |
| Product created | `201 Created` | A new product was created |
| Invalid product data | `400 Bad Request` | The submitted data failed validation |
| Malformed JSON | `400 Bad Request` | The request body contains invalid JSON |
| Product not found | `404 Not Found` | The requested product does not exist |
| Unknown route | `404 Not Found` | The requested endpoint does not exist |
| Unexpected server error | `500 Internal Server Error` | An unexpected server-side problem occurred |

Example error response:

```json
{
  "success": false,
  "message": "Route not found"
}
```

The exact error response depends on which handler processes the request.

The application should return useful messages without exposing sensitive internal details to API clients.

## 14. Testing with Postman

Postman is used to send HTTP requests to the running server and inspect responses.

### Step 1: Start the API

In the VS Code terminal, run:

```bash
npm run dev
```

Confirm that the server starts before sending requests.

### Step 2: Create a Postman collection

Create a collection named:

**`Syntecxhub - Product CRUD API`**

Save all project test requests in this collection.

### Step 3: Create and save the test requests

Use the following request names to keep your collection organized.

| No. | Saved request name | Method | URL |
|---:|---|---|---|
| 1 | Test API Welcome Route | GET | `http://localhost:3000/` |
| 2 | Get All Products | GET | `http://localhost:3000/api/products` |
| 3 | Create Product | POST | `http://localhost:3000/api/products` |
| 4 | Get Product by ID | GET | `http://localhost:3000/api/products/1` |
| 5 | Update Product | PUT | `http://localhost:3000/api/products/1` |
| 6 | Filter Products by Category | GET | `http://localhost:3000/api/products?category=Electronics` |
| 7 | Filter Products by Minimum Price | GET | `http://localhost:3000/api/products?minPrice=20` |
| 8 | Filter Products by Maximum Price | GET | `http://localhost:3000/api/products?maxPrice=30` |
| 9 | Filter Products by Price Range | GET | `http://localhost:3000/api/products?minPrice=20&maxPrice=50` |
| 10 | Get Products with Pagination | GET | `http://localhost:3000/api/products?page=1&limit=5` |
| 11 | Delete Product | DELETE | `http://localhost:3000/api/products/1` |
| 12 | Test Product Not Found | GET | `http://localhost:3000/api/products/99999` |
| 13 | Test Invalid Route | GET | `http://localhost:3000/api/invalid` |
| 14 | Test Invalid Product Data | POST | `http://localhost:3000/api/products` |

Prefixing request names with numbers, such as `01 - Test API Welcome Route`, is also a useful way to preserve the intended order.

### Step 4: Configure POST and PUT requests

For requests that create or update products:

1. Select the request.
2. Open the **Body** tab.
3. Select **raw**.
4. Choose **JSON** from the format selector.
5. Enter the required product fields.
6. Click **Send**.
7. Verify the response status and body.
8. Save the request to the collection.

### Step 5: Test successful operations

Test these operations in order:

1. Check the welcome route.
2. Retrieve all products.
3. Create a product.
4. Retrieve the newly created product using its returned ID.
5. Update that product.
6. Test the category and price filters.
7. Test pagination.
8. Delete the product after completing the other tests.

### Step 6: Test error handling

Test a product ID that does not exist:

```text
GET http://localhost:3000/api/products/99999
```

Test an unknown route:

```text
GET http://localhost:3000/api/invalid
```

Test invalid product data:

```json
{
  "name": "",
  "price": -10,
  "description": "",
  "category": ""
}
```

Send this JSON using a POST request to `/api/products`.

Expected behavior: the API should reject invalid product data with `400 Bad Request`, provided the controller enforces these validation rules.

### Important testing notes

- Create a product before testing retrieval, update, and deletion.
- Use the actual ID returned by the API instead of assuming it will always be `1`.
- Run the deletion test after the other tests that need that product.
- Since the current storage is in memory, products are lost when the server restarts.
- If an endpoint returns a different status than expected, inspect the controller implementation and the response body.

## 15. Postman Collection and API Testing

This repository includes an exported Postman collection containing the saved HTTP requests used to test the Product CRUD API.

The collection allows reviewers and other developers to import the requests into Postman and reproduce the API tests without creating every request manually.

### Collection location

The exported collection is available at:

```text
postman/Syntecxhub-Product-CRUD-API.postman_collection.json
```

### How to import the collection

1. Start the API locally by running `npm run dev` in the project directory.
2. Open Postman.
3. Select **Import**.
4. Choose the exported JSON file from the repository's `postman` folder.
5. Confirm the import.
6. Open the imported collection and select a request.
7. Click **Send** to execute the request against the local API.

The default API base URL is:

```text
http://localhost:3000
```

### Included tests

The collection contains saved requests for testing the following functionality:

- API welcome route
- Retrieving all products
- Creating a product
- Retrieving a product by ID
- Updating a product
- Filtering products by category
- Filtering products by minimum and maximum price
- Filtering products by a price range
- Retrieving paginated results
- Deleting a product
- Handling requests for nonexistent products
- Handling unknown routes
- Validating invalid product data

### Testing notes

The API server must be running before requests can be executed. Requests that retrieve, update, or delete a specific product require an existing product ID. Create a product first when necessary, and use the ID returned by the API.

The current implementation stores products in memory, so the data resets when the server restarts. Some error responses depend on the validation rules implemented in the controller.

The exported collection provides a reusable record of the API testing workflow and supports verification of the project's functionality.


## 16. Git and GitHub Setup

Git is used to track project changes, while GitHub hosts the repository online.

### Step 1: Create a GitHub repository

Sign in to GitHub and create a new repository.

Suggested repository name:

```text
Syntecxhub-Product-CRUD-API
```

Use the exact repository naming format required by your assignment if it differs.

### Step 2: Initialize Git

Open a terminal inside your project folder and run:

```bash
git init
```

### Step 3: Check ignored files

Before staging files, verify that `node_modules` is excluded by `.gitignore`.

Run:

```bash
git status
```

Do not commit `node_modules` or any private credentials.

### Step 4: Stage the project files

```bash
git add .
```

Check what will be committed:

```bash
git status
```

### Step 5: Create the first commit

```bash
git commit -m "Build Product CRUD API with filtering and pagination"
```

### Step 6: Set the main branch

```bash
git branch -M main
```

### Step 7: Connect the GitHub repository

Replace the example URL with the URL of your actual GitHub repository:

```bash
git remote add origin Example URL
```

### Step 8: Push the project

```bash
git push -u origin main
```

Follow GitHub's authentication prompts if necessary.

### Step 9: Verify the submission

Open the repository in your browser and confirm that it contains:

- `server.js`
- `controllers/productController.js`
- `routes/productRoutes.js`
- `package.json`
- `package-lock.json`
- `.gitignore`
- `README.md`

Ensure that the source files are visible and the README displays correctly.

For later changes, use:

```bash
git add .
git commit -m "Update project documentation"
git push
```

Only use the commit message shown here when the changes you made match it.

## 17. Data Storage and Limitations

### Current data storage

The current version stores products in a JavaScript array in memory. It does not use a persistent database.

This means:

- Products exist only while the application process is running.
- Restarting the server clears the products.
- The application does not preserve data between sessions.
- The current version does not require MongoDB, Mongoose, database credentials, or a `.env` file.

This storage approach is suitable for learning and demonstrating CRUD operations, but it is not intended for production data persistence.

### Environment configuration

The application uses the following default port configuration:

```javascript
const PORT = process.env.PORT || 3000;
```

A `.env` file is not required for the current implementation. If environment variables are introduced later, a package such as `dotenv` can be added and configured as needed.

Never commit passwords, database connection strings, or API secrets to a public repository.

## 18. Future Improvements

The following improvements could extend the project beyond its current requirements:

1. **MongoDB integration:** Store products persistently in a database.
2. **Mongoose models:** Define product schemas and database-level validation.
3. **Environment variables:** Configure database URLs and deployment settings securely.
4. **Automated testing:** Add unit and integration tests using tools such as Jest or Supertest.
5. **Improved pagination metadata:** Return the current page, page size, total item count, and total pages.
6. **Additional validation:** Improve validation of IDs, numeric values, strings, and query parameters.
7. **API documentation:** Add an OpenAPI/Swagger specification.
8. **Deployment:** Host the API on a suitable cloud platform.
9. **Logging:** Add structured request and error logging.
10. **Authentication and authorization:** Restrict sensitive operations when required.

These are potential enhancements and are not claimed as implemented features of the current version.

## 19. Author and Project Information

**Project title:** Product CRUD API  
**Project number:** Project 2  
**Organization:** Syntecxhub  
**Technology stack:** Node.js, Express.js, JavaScript  
**Testing tool:** Postman  
**Version control:** Git and GitHub

This project was developed to practice backend API development, RESTful routing, CRUD operations, validation, filtering, pagination, error handling, API testing, and source-code management.

---

## Conclusion

The Syntecxhub Product CRUD API demonstrates the fundamentals of creating and testing a RESTful backend application using Node.js and Express.js.

The project includes product management endpoints, filtering and pagination capabilities, basic validation and error handling, a structured source-code layout, Postman testing instructions, and GitHub submission steps.

The repository is intended to serve as a clear, maintainable foundation for further backend development and future database integration.
