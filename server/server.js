const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  const data = { message: 'Integração bem-sucedida!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
