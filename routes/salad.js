const { Router } = require('express');
const SaladController = require('../controllers/salad.controller');
const { findIngredient } = require('../middlewares/getIngredients');

const saladRouter = Router();

// GET http://localhost:5001/api/salads
saladRouter.get('/', SaladController.getAllSalads);
// POST http://localhost:5001/api/salads
saladRouter.post('/', findIngredient, SaladController.createSalad);
// GET http://localhost:5001/api/salads/:saladId
saladRouter.get('/:saladId', SaladController.getSalad);
// PUT http://localhost:5001/api/salads/:saladId
saladRouter.put('/:saladId', SaladController.updateSalad);
// DELETE http://localhost:5001/api/salads/:saladId 
saladRouter.delete('/:saladId', SaladController.deleteSalad);

module.exports = saladRouter;