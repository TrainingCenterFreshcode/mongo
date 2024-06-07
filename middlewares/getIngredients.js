const { Ingredient } = require('../models');

module.exports.findIngredient = async(req, res, next) => {
  try {
    const { body: { ingredients } } = req;

    const ingredientsObjectIdArray = [];

    for(let i = 0; i < ingredients.length; i++) {
      const ingredientObject = await Ingredient.findOne({
        name: ingredients[i]
      });

      ingredientsObjectIdArray.push(ingredientObject['_id']);
    }

    console.log(ingredientsObjectIdArray);

    req.ingredients = ingredientsObjectIdArray;
    next();
  } catch (error) {
    next(error);
  }
}