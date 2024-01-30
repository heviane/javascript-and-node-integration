// This code uses the native Node.js http module to create a basic HTTP server.
const http = require('http');
const url = require('url');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  // Middleware to handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/api/message') {
    const mensagem = { message: 'Hello, this is the API message!' };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mensagem));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Node.js server running on http://localhost:${port}`);
});
