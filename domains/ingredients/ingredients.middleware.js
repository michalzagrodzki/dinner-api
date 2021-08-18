const { noSpecialCharacters, is } = require("./../../utils/middlewares");

const validate = {
  id: (payload) => {
    if (noSpecialCharacters(payload)) return;
    throw "Only alphanumeric characters are allowed in id";
  },
  request: (payload) => {
    const { name, price, calories } = payload;
    if (is.undefinedValue(name)) throw "Missing name";
    if (is.emptyValue(name)) throw "Empty name";
    if (is.undefinedValue(price)) throw "Missing price";
    if (is.undefinedValue(calories)) throw "Missing calories";
    return payload;
  },
};

const ingredientsValidator = {
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
      validate.request(req.body);

      next();
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};

exports.ingredientsValidator = ingredientsValidator;
