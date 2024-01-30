// This code uses the express.js to simplify server creation and route processing.
const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  next();
});

app.use(express.json());

app.get('/api/message', (req, res) => {
    const mensagem = { message: 'Hello, this is the API message!' };
    res.json(mensagem);
});

app.listen(port, () => {
    console.log(`Node.js server running on http://localhost:${port}`);
});
