const service = require("./ingredients.service");

const ingredients = {};

ingredients.list = async (req, res, next) => {
  try {
    const response = await service.getList();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

ingredients.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getDetails(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

ingredients.post = async (req, res, next) => {
  try {
    const { name, price, calories } = req.body;
    const parseCalories = parseInt(calories, 10);
    const request = {
      name,
      price,
      parseCalories,
    };
    const response = await service.postIngredient(request);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

ingredients.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, calories } = req.body;
    const parseCalories = parseInt(calories, 10);
    const request = {
      id,
      name,
      price,
      parseCalories,
    };
    const serviceResponse = await service.updateIngredient(request);
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

ingredients.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const serviceResponse = await service.deleteIngredient(id);
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

module.exports = ingredients;
