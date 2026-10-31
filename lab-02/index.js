
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "books.db");

let db = null;

// Initialize Database and Server
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    console.log("Database Connected Successfully");

    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });

  } catch (error) {
    console.log(`Database Error: ${error.message}`);
    process.exit(1);
  }
};

// 1. GET all books
app.get("/books/", async (request, response) => {
  try {
    const query = `SELECT * FROM book;`;
    const books = await db.all(query);
    response.status(200).send(books);
  } catch (error) {
    response.status(500).send("Internal Server Error");
  }
});

// 2. GET a book by ID
app.get("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;

    const query = `SELECT * FROM book WHERE id = ?;`;
    const book = await db.get(query, [bookId]);

    if (book === undefined) {
      response.status(404).send("Book Not Found");
    } else {
      response.status(200).send(book);
    }
  } catch (error) {
    response.status(500).send("Internal Server Error");
  }
});

// 3. POST - Add a new book
app.post("/books/", async (request, response) => {
  try {
    const { title, author, price, pages } = request.body;

    const query = `
      INSERT INTO book (title, author, price, pages)
      VALUES (?, ?, ?, ?);
    `;

    await db.run(query, [title, author, price, pages]);

    response.status(201).send("Book Added Successfully");
  } catch (error) {
    response.status(500).send("Internal Server Error");
  }
});

// 4. PUT - Update a book
app.put("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;
    const { title, author, price, pages } = request.body;

    const query = `
      UPDATE book
      SET title = ?, author = ?, price = ?, pages = ?
      WHERE id = ?;
    `;

    const result = await db.run(query, [
      title, author, price, pages, bookId
    ]);

    if (result.changes === 0) {
      response.status(404).send("Book Not Found");
    } else {
      response.status(200).send("Book Updated Successfully");
    }
  } catch (error) {
    response.status(500).send("Internal Server Error");
  }
});

// 5. DELETE - Remove a book
app.delete("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;

    const query = `DELETE FROM book WHERE id = ?;`;
    const result = await db.run(query, [bookId]);

    if (result.changes === 0) {
      response.status(404).send("Book Not Found");
    } else {
      response.status(200).send("Book Deleted Successfully");
    }
  } catch (error) {
    response.status(500).send("Internal Server Error");
  }
});

// Start the application
initializeDBAndServer();
