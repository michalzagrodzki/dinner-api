const service = require("./dinners.service");
const ingredientsService = require("./../ingredients/ingredients.service");

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
    const { ingredients } = response;
    const ingredientsList = await ingredientsService.getSelected(ingredients);
    response.ingredients = ingredientsList;
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = dinners;
