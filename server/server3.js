const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    next();
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello, this is the API message!' });
});

app.listen(3000, () => {
  console.log('Node.js server running on http://localhost:3000');
});
