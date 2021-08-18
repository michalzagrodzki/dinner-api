const service = require("./dinners.service");
const ingredientsService = require("./../ingredients/ingredients.service");
const { parseIngredients } = require("./../../utils/helpers");
const { OMITTED_INGREDIENTS_KEYS } = require("./../../utils/constants");

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
      parsedResponse.ingredients = parseIngredients(
        ingredientsList,
        OMITTED_INGREDIENTS_KEYS
      );
    }
    res.status(200).json(parsedResponse);
  } catch (error) {
    next(error);
  }
};

dinners.post = async (req, res, next) => {
  try {
    const { title, price, calories, weight, ingredients } = req.body;
    const parseCalories = parseInt(calories, 10);
    const parseWeight = parseInt(weight, 10);
    const request = {
      title,
      price,
      parseCalories,
      parseWeight,
      ingredients,
    };
    const response = await service.postDinner(request);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, price, calories, weight, ingredients } = req.body;
    const parseCalories = parseInt(calories, 10);
    const parseWeight = parseInt(weight, 10);
    const request = {
      id,
      title,
      price,
      parseCalories,
      parseWeight,
      ingredients,
    };
    const serviceResponse = await service.updateDinner(request);
    const { nModified } = serviceResponse;
    const parsedResponse = {
      updated: false,
    };
    nModified > 0
      ? (parsedResponse.updated = true)
      : (parsedResponse.updated = false);
    res.status(200).json(parsedResponse);
  } catch (error) {
    next(error);
  }
};

dinners.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const serviceResponse = await service.deleteDinner(id);
    const { deletedCount } = serviceResponse;
    const parsedResponse = {
      deleted: false,
    };
    deletedCount > 0
      ? (parsedResponse.deleted = true)
      : (parsedResponse.deleted = false);
    res.status(200).json(parsedResponse);
  } catch (error) {
    next(error);
  }
};

module.exports = dinners;
