const express = require('express');
const app = express();
const SaladController = require('./controllers/salad.controller');
const { errorHandler } = require('./errorHandler');

app.use(express.json());

// GET http://localhost:5001/
app.get('/', SaladController.getAllSalads);
// POST http://localhost:5001/
app.post('/', SaladController.createSalad);
// GET http://localhost:5001/25
app.get('/:saladId', SaladController.getSalad);
app.put('/:saladId');
app.delete('/:saladId');

app.use(errorHandler);

module.exports = app;