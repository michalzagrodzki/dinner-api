const is = {
  missingParams: (payload) => {
    if (!payload.params) return true;
  },
  emptyParams: (payload) => {
    if (!payload.params.id && payload.params.id === "") return true;
  },
};

const validate = {
  id: (payload) => {
    noAlphaCharacters = (payload) => {
      regex = new RegExp(/^[0-9]+$/g);
      return regex.test(payload);
    };
    if (noAlphaCharacters(payload)) return;
    throw "Only numeric characters are allowed in id";
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
