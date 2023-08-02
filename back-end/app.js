// app.js

const express = require('express');
const app = express();
const connectDB = require("./config/db.js");
const cors = require('cors');

// Connect Database
connectDB();


// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false })); //  allows Express to read data sent using a POST or PUT request. It is used for recognizing incoming objects as JSON objects.



app.get('/', (req, res) => res.send('Hello world!'));

// Import your books routes from books.js
const booksRoutes = require('./routes/api/books');

// Use the booksRoutes middleware for the '/api/books' path
app.use('/api/books', booksRoutes);





const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));