const express = require('express');
const app = express();

app.get('/test', (request, response) => {
  response.send('JAlO');
});

app.listen(3000, () => {
  console.log('Estamos al aire!');
});
