const service = require("./dinners.service");
const ingredientsService = require("./../ingredients/ingredients.service");
const { parseIngredients } = require("./../../utils/helpers");

const dinners = {};

dinners.list = async (req, res, next) => {
  try {
    const response = await service.getList();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getDetails(id);
    const parsedResponse = { ...response._doc };
    const { ingredients } = parsedResponse;
    if (ingredients.length > 0) {
      const ingredientsList = await ingredientsService.getSelected(ingredients);
      parsedResponse.ingredients = parseIngredients(ingredientsList);
    }
    res.status(200).json(parsedResponse);
  } catch (error) {
    next(error);
  }
};

module.exports = dinners;
