const Ingredient = require("./ingredients.model");

const service = {};

service.getList = async () => {
  const query = Ingredient.find(function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
};

service.getDetails = async (id) => {
  const query = Ingredient.findById(id, function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
};

module.exports = service;
