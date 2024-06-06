const express = require('express');
const app = express();
const SaladController = require('./controllers/salad.controller');
const { errorHandler } = require('./errorHandler');

app.use(express.json());

// GET http://localhost:5001/
app.get('/', SaladController.getAllSalads);
// POST http://localhost:5001/
app.post('/', SaladController.createSalad);
// GET http://localhost:5001/:saladId
app.get('/:saladId', SaladController.getSalad);
// PUT http://localhost:5001/:saladId
app.put('/:saladId', SaladController.updateSalad);
// DELETE http://localhost:5001/:saladId 
app.delete('/:saladId', SaladController.deleteSalad);

app.use(errorHandler);

module.exports = app;