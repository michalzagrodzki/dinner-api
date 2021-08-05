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

module.exports = ingredients;
