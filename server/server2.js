/* This code uses the express.js to simplify server creation and route processing.*/

// Import the 'express' module, which simplifies the creation of web servers in Node.js
const express = require('express');

// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  next();
});

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a route for handling GET requests to the '/api/message' endpoint
app.get('/api/message', (req, res) => {
    const mensagem = { message: 'Hello, this is the API message!' };
    res.json(mensagem);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Node.js server running on http://localhost:${port}`);
});
