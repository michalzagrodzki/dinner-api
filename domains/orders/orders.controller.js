const service = require("./orders.service");
const { parseIngredients } = require("./../../utils/helpers");
const { OMITTED_ORDER_INGREDIENTS_KEYS } = require("./../../utils/constants");

const orders = {};

orders.list = async (req, res, next) => {
  try {
    const response = await service.getList();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

orders.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getDetails(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

orders.post = async (req, res, next) => {
  try {
    const {
      title,
      dinner_id,
      name: client_name,
      phone: client_phone,
      email: client_email,
      price,
      calories,
      weight,
      ingredients,
    } = req.body;
    const parsedIngredients = parseIngredients(
      ingredients,
      OMITTED_ORDER_INGREDIENTS_KEYS
    );
    const evaluatedPrice = evaluatePrice(price, parsedIngredients);
    const parseCalories = parseInt(calories, 10);
    const parseWeight = parseInt(weight, 10);
    const request = {
      title,
      dinner_id: dinner_id || null,
      client_name: client_name || "default client",
      client_phone: client_phone || "no phone provided",
      client_email: client_email || "no email provided",
      evaluatedPrice,
      parseCalories,
      parseWeight,
      parsedIngredients,
    };
    const response = service.postOrder(request);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = orders;
