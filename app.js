const express = require('express');
const app = express();
const port = 3000;

// Set EJS as templating engine 
app.set('view engine', 'ejs');

// Sample data
const books = [
  { "id": 1, "title": "Northanger Abbey", "author": "Austen, Jane", "year_written": 1814, "edition": "Penguin", "price": 18.2 },
  { "id": 2, "title": "War and Peace", "author": "Tolstoy, Leo", "year_written": 1865, "edition": "Penguin", "price": 12.7 },
  // Add other books as needed
];

// Endpoint to display all books in JSON
app.get('/books', (req, res) => {
  res.json(books);
});

// Endpoint to display a single book by id in JSON
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('The book with the given ID was not found.');
  res.json(book);
});

// Endpoint to display all books in a table with EJS
app.get('/ejs/books', (req, res) => {
  res.render('books', { books });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
