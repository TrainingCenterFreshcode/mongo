const { Router } = require('express');
const IngredientController = require('../controllers/ingredient.controller');

const ingredientRouter = Router();

// GET http://localhost:5001/api/ingredients
ingredientRouter.get('/', IngredientController.getAllIngredients);
// POST http://localhost:5001/api/ingredients
ingredientRouter.post('/', IngredientController.addIngredient);

module.exports = ingredientRouter;