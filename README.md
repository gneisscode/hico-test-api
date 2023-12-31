# hico-test-api

## Description

This repository contains the backend service for the hico-test-frontend app. The API is responsible for managing employee data, providing endpoints for creating, retrieving, updating, and deleting employee records.


## Live API

The live version of this API is deployed on Render.com. You can access it [here](https://hico-test-api.onrender.com).
You are able to make requests with  the baseUrl `https://hico-test-api.onrender.com/api`


## Key Technologies

### Express.js for Web Server
The API is built using Express.js, a popular web application framework for Node.js. Express simplifies the development of robust and scalable APIs by providing a set of powerful features.

### MongoDB with Mongoose for Database Interaction
Data is stored in a MongoDB database, and the Mongoose library is used to interact with the database. Mongoose simplifies the process of defining data models and performing database operations.

### Testing with Mocha and Chai
The API is tested using the Mocha testing framework and the Chai assertion library. Testing ensures the reliability of the API by validating its functionality under various scenarios.

## Folder Structure

The backend code is organized into the following directories:

models: Contains the data models, including the Employee model, defining the structure of employee data.

routes: Houses the route definitions, specifying how different HTTP requests are handled.

controllers: Contains the controller logic for each route. Controllers handle the logic, processing requests, and interacting with the data models.


## Scripts

- start: Start the production server (after building the project).
- dev: Start the development server using Nodemon for automatic server restarts on file changes.
- test: Run tests using Mocha with a timeout of 10 seconds.
- build: Compile TypeScript files to JavaScript using the TypeScript compiler.

## Environment Variables

The API uses environment variables managed by the dotenv library for configuration. Make sure to set up a .env file with the necessary variables such as MONGODB_URI for database connection.


## Employee Model

The Employee model defines the structure of employee data in the MongoDB database. It leverages Mongoose, a powerful ODM (Object Data Modeling) library for MongoDB and Node.js.

### EmployeeDocument Interface

The EmployeeDocument interface represents a document in the Employee collection and extends the mongoose.Document type. It includes the following properties:

- _id: Unique identifier generated by MongoDB.
- firstName: First name of the employee.
- lastName: Last name of the employee.
- salutation: Salutation of the employee, such as "Dr.", "Mr.", "Ms.", "Mrs.", or "Mx.".
- gender: Gender of the employee, which can be "male", "female", or "unspecified".
- employeeNo: Unique employee number.
- profileColour: Profile color of the employee, which can be "Green", "Red", "Blue", or "Default".
- grossSalary: Gross salary of the employee (optional).
- createdAt: Date when the employee record was created.
- updatedAt: Date when the employee record was last updated (nullable).


## Controllers

### EmployeeController
- test: Endpoint to check if the API is alive.
- addEmployee: Endpoint to add a new employee record.
- getEmployee: Endpoint to retrieve details of a specific employee.
- getEmployees: Endpoint to retrieve a list of all employees.
- updateEmployee: Endpoint to update details of an existing employee.
- deleteEmployee: Endpoint to delete an employee record.

Each controller method handles specific API endpoints related to employee data, ensuring a clear separation of concerns and maintainability.


## Employee Routes

The employeeRoutes module defines the API routes for interacting with employee data. It utilizes Express.js, a popular web application framework for Node.js, and connects each route to corresponding methods in the EmployeeController.

### Routes Overview

1. **GET /**

- Endpoint: /
- Method: GET
- Description: A test endpoint to check if the API is alive.
- Controller Method: EmployeeController.test


2. **POST /employee**

- Endpoint: /employee
- Method: POST
- Description: Adds a new employee record.
- Controller Method: EmployeeController.addEmployee


3. **GET /employee/:id**

- Endpoint: /employee/:id
- Method: GET
- Description: Retrieves details of a specific employee based on the provided ID.
- Controller Method: EmployeeController.getEmployee

4. **GET /employee**

- Endpoint: /employee
- Method: GET
- Description: Retrieves a list of all employees.
- Controller Method: EmployeeController.getEmployees

5. **PUT /employee**

- Endpoint: /employee
- Method: PUT
- Description: Updates details of an existing employee.
- Controller Method: EmployeeController.updateEmployee

6. **DELETE /employee/:id**

- Endpoint: /employee/:id
- Method: DELETE
- Description: Deletes an employee record based on the provided ID.
- Controller Method: EmployeeController.deleteEmployee
- Usage

To interact with the employee data through these routes, make HTTP requests to the corresponding endpoints. For example:

To add a new employee, send a POST request to /employee.
To get details of a specific employee, send a GET request to /employee/:id.
To update an existing employee's details, send a PUT request to /employee.
To delete an employee, send a DELETE request to /employee/:id.

# Dependencies

This project utilizes the following dependencies for various functionalities:

## Runtime Dependencies

- **Express.js:** A fast and minimalist web framework for Node.js. It is used for handling HTTP requests, defining routes, and managing middleware.

- **Mongoose:** An elegant MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straightforward schema-based solution to model your application data.

- **dotenv:** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

- **cors:** A middleware for Express that enables cross-origin resource sharing. It's used to handle CORS headers and allow communication with the frontend.

## Development Dependencies

- **TypeScript:** A superset of JavaScript that adds static typing to the language. It helps catch type-related errors early in the development process.

- **@types/express:** TypeScript type definitions for Express.js.

- **@types/mongoose:** TypeScript type definitions for Mongoose.

- **@types/cors:** TypeScript type definitions for the `cors` middleware.

- **nodemon:** A development tool that monitors for changes in your source code and automatically restarts your server.

- **mocha:** A feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

- **chai:** A BDD/TDD assertion library for Node.js and the browser.

- **chai-http:** A plugin for the Chai assertion library that provides HTTP assertion testing.

- **ts-node:** Enables TypeScript execution directly in Node.js without the need for compilation.

- **tsc-alias:** A TypeScript transformer that adds support for module aliasing.

- **tsconfig-paths:** A utility to use path mappings in the `tsconfig.json`


## Installation

To install the project dependencies, run the following command in your terminal

```
npm install

```

## Getting Started

To run the development server, run the following command in your terminal

```
npm start

```

## Contributing

Feel free to explore the codebase, and if you have any questions or suggestions, please don't hesitate to reach out. Happy coding!




