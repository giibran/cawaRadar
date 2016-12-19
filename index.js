const express = require('express');
const app = express();
const {insertText, getText} = require('./app');

app.get('/insertText', (request, response) => {
  insertText('test');
});

app.get('/getText', (request, response) => {
  getText();
});
app.listen(3000, () => {
  console.log('Estamos al aire!');
});
