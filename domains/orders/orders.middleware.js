const { noSpecialCharacters, is } = require("./../../utils/middlewares");

const validate = {
  id: (payload) => {
    if (noSpecialCharacters(payload)) return;
    throw "Only alphanumeric characters are allowed in id";
  },
  request: (payload) => {
    const { title, calories, ingredients } = payload;
    if (is.undefinedValue(title)) throw "Missing title";
    if (is.emptyValue(title)) throw "Empty title";
    if (is.undefinedValue(calories)) throw "Missing calories";
    if (is.emptyIngredients(ingredients)) throw "Missing ingredients";
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
