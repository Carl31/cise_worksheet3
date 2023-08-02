// app.js

const express = require('express');
const app = express();
const connectDB = require("./config/db.js");

// Connect Database
connectDB();


app.get('/', (req, res) => res.send('Hello world!'));

// Import your books routes from books.js
const booksRoutes = require('./routes/api/books');

// Use the booksRoutes middleware for the '/api/books' path
app.use('/api/books', booksRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));