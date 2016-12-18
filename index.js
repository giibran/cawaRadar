const express = require('express');
const app = express();
const {} = require('./app');

app.get('/hello', (request, response) => {
  sayHello();
});

app.get('/bye', (request, response) => {
  sayBye();
});
app.listen(3000, () => {
  console.log('Estamos al aire!');
});
