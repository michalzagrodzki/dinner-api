const { noSpecialCharacters, is } = require("./../../utils/middlewares");

const validate = {
  id: (payload) => {
    if (noSpecialCharacters(payload)) return;
    throw "Only alphanumeric characters are allowed in id";
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
};

exports.ingredientsValidator = ingredientsValidator;
