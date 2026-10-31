# Lab 2: SQLite Database and CRUD Routes

## Student Details

- **Name:** Chada Varshini
- **Registration Number:** 252U1R1050
- **Section:** S-15

## Project Description

This project demonstrates the integration of an SQLite database with a Node.js Express server. It implements CRUD (Create, Read, Update, Delete) operations through REST API endpoints.

The project uses SQLite to store book details and Express.js to handle HTTP requests.

## Technologies Used

- Node.js
- Express.js
- SQLite
- SQLite3
- Postman
- Nodemon
- Visual Studio Code

## Database Structure

**Database Name:** `books.db`

**Table Name:** `book`

| Column | Data Type |
|---|---|
| id | INTEGER PRIMARY KEY |
| title | TEXT |
| author | TEXT |
| price | INTEGER |
| pages | INTEGER |

Initially, 10 book records were inserted into the database using SQLite CLI.

## Installation and Execution

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npx nodemon index.js
```

### 3. Server Address

```text
http://localhost:3000/
```

### Expected Terminal Output

```text
Database Connected Successfully
Server Running at http://localhost:3000/
```

## API Endpoints

The following five CRUD operations were implemented and tested using Postman.

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Retrieves all books |
| GET | `/books/:bookId/` | Retrieves a book using its ID |
| POST | `/books/` | Adds a new book |
| PUT | `/books/:bookId/` | Updates an existing book |
| DELETE | `/books/:bookId/` | Deletes a book using its ID |

## Output Screenshots

### 1. GET – Retrieve All Books

![GET All Books](screenshots/get-all-books.png)

### 2. GET – Retrieve Book by ID

![GET Book By ID](screenshots/get-book-by-id.png)

### 3. POST – Add a New Book

![POST Add Book](screenshots/post-add-book.png)

### 4. PUT – Update an Existing Book

![PUT Update Book](screenshots/put-update-book.png)

### 5. DELETE – Delete a Book

![DELETE Book](screenshots/delete-book.png)

### 6. SQLite Database Records

![Database Records](screenshots/database-records.png)

### 7. DELETE Verification

![Delete Verification](screenshots/delete-verification.png)

## Problems Faced and Solutions

1. **SQLite CLI path issue:** Initially, the terminal could not locate the SQLite executable. This was resolved by identifying the correct installation path and executing SQLite using the full path.

2. **Database connection:** Connected the SQLite database to the Express server using the `sqlite` and `sqlite3` packages.

3. **API testing:** Tested all five CRUD endpoints using Postman and verified the responses.

## Deployment

**Live URL:** Not deployed.

The application was tested locally using Postman. If deployment is not completed, the local API screenshots are provided above as evidence of successful execution.

## Result

Successfully created an SQLite database, connected it to a Node.js Express server, implemented all five CRUD API endpoints, and verified their functionality using Postman.
