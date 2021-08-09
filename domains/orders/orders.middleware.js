const { noSpecialCharacters } = require("./../../utils/middlewares");

function undefinedValue(value) {
  if (value === undefined || value === null) return true;
}

function emptyValue(value) {
  if (value !== "") return true;
}

function emptyIngredients(list) {
  if (list.length === 0) return true;
}

const is = {
  missingParams: (payload) => {
    if (!payload.params) return true;
  },
  emptyParams: (payload) => {
    if (!payload.params.id && payload.params.id === "") return true;
  },
  missingBody: (payload) => {
    if (!payload.body) return true;
  },
  emptyBody: (payload) => {
    const { ingredients } = payload.body;
    if (ingredients && ingredients.length !== 0) return false;
    return true;
  },
};

const validate = {
  id: (payload) => {
    if (noSpecialCharacters(payload)) return;
    throw "Only alphanumeric characters are allowed in id";
  },
  request: (payload) => {
    const { title, dinner_id, price, calories, ingredients } = payload;
    if (undefinedValue(title)) throw "Missing title";
    if (emptyValue(title)) throw "Empty title";
    if (undefinedValue(dinner_id)) throw "Missing dinner id";
    if (undefinedValue(price)) throw "Missing price";
    if (undefinedValue(calories)) throw "Missing calories";
    if (emptyIngredients(ingredients)) throw "Missing ingredients";
    return payload;
  },
};

const ordersValidator = {
  get: function (req, res, next) {
    try {
      if (is.missingParams(req)) throw "Missing params";
      if (is.emptyParams(req)) throw "Id is empty";
      validate.id(req.params.id);

      next();
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
  post: function (req, res, next) {
    try {
      if (is.missingBody(req)) throw "Missing request body";
      if (is.emptyBody(req)) throw "Request body is empty";

      validate.request(req.body);

      next();
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};

exports.ordersValidator = ordersValidator;
