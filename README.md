# TASKTONIC - Node.js, Express, PostgreSQL, GraphQL

A simple **Todo List** project built with **Node.js**, **Express**, **PostgreSQL**, and **GraphQL**. This project is designed as a basic backend setup that can be used by backend developers to quickly get started with these technologies.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable backend applications.
- **Express**: Web framework for Node.js for building RESTful APIs.
- **PostgreSQL**: Relational database for storing todo list items.
- **GraphQL**: API query language for interacting with the backend data.

## Features

- **CRUD Operations** for Todo Items (Create, Read, Update, Delete).
- **GraphQL API** for fetching, adding, updating, and deleting todo items.
- **PostgreSQL Database** for storing todo data.

## Setup Instructions

### 1. Clone the repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install dependencies

Install the required dependencies:

```bash
npm install
```

Explanation: The `npm install` command will install all the necessary packages and dependencies from the `package.json` file.

### 3. Configure PostgreSQL

Make sure you have PostgreSQL installed and running on your machine. You will need to create a database for this project.

Instructions:
- Open PostgreSQL and create a database called `todolistdb` or any other name you prefer.
- You can use a `.env` file to store your database connection string.

Example `.env` file:

```bash
DATABASE_URL=your_db_url
```

Explanation: The `.env` file stores your environment variables securely, such as your database connection string. Replace user and password with your PostgreSQL credentials.

### 4. Set up the database

Run the migration script to create the required tables for the Todo List project:

```bash
npm run migrate
```

Explanation: This command executes the migration script that sets up the necessary database tables. Make sure to include any SQL migration files in the project that will define your database schema.

### 5. Start the server

Once the setup is complete, you can start the server with the following command:

```bash
npm start
```

### 6. Test the API

Once the server is running, you can test the GraphQL API:

Instructions:
- Open a browser or Postman
- Navigate to `http://localhost:4000/graphql`

## GraphQL Queries

Here are some example GraphQL queries you can use:

### Add a Todo

```graphql
mutation { 
  addTodo(title: "Learn Node.js", description: "Learn how to build backend with Node.js") { 
    id 
    title 
    description 
  } 
}
```

*Explanation*: This query creates a new todo item with the title "Learn Node.js" and the description "Learn how to build backend with Node.js."

### Get All Todos

```graphql
query { 
  getTodos { 
    id 
    title 
    description 
  } 
}
```

*Explanation*: This query fetches all todos from the database, returning their `id`, `title`, and `description`.

### Update a Todo

```graphql
mutation { 
  updateTodo(id: 1, title: "Learn GraphQL", description: "Learn how to use GraphQL") { 
    id 
    title 
    description 
  } 
}
```

*Explanation*: This mutation updates an existing todo item (with ID `1`) to have the new title and description.

### Delete a Todo

```graphql
mutation { 
  deleteTodo(id: 1) { 
    id 
    title 
    description 
  } 
}
```

*Explanation*: This mutation deletes a todo item by its `id` (in this case, `1`), and returns the deleted todo's details.

