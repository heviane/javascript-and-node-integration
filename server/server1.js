/* This code uses the native Node.js http module to create a basic HTTP server.*/

// Import the 'http' module, which provides functionality for creating HTTP servers
const http = require('http');

// Import the 'url' module, which provides utilities for URL parsing and formatting
const url = require('url');

// Destructure the 'parse' function from the 'querystring' module
// 'querystring' module is used for parsing and formatting URL query strings
const { parse } = require('querystring');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Middleware to handle CORS (Cross-Origin Resource Sharing)
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  // Handle preflight requests for CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.statusCode = 204; // No content needed for preflight
    res.end();
    return;
  }
  // Handle GET requests to the '/api/message' endpoint
  if (req.method === 'GET' && req.url === '/api/message') {
    const mensagem = { message: 'Hello, this is the API message!' };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mensagem));
  } else {
    // Return a 404 response for unknown endpoints
    res.statusCode = 404;
    res.end();
  }
});

// Set the server to listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Node.js server running on http://localhost:${port}`);
});
