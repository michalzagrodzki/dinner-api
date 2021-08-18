const Ingredient = require("./ingredients.model");

const service = {};

service.getList = async () => {
  const query = Ingredient.find(function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
};

service.getSelected = async (list) => {
  const query = Ingredient.find(
    {
      _id: { $in: list },
    },
    function (err) {
      if (err) return err;
    }
  );
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

service.postIngredient = async (payload) => {
  const { name, price, parseCalories: calories } = payload;
  const ingredientRecord = new Ingredient({
    name,
    price,
    calories,
  });
  const response = await ingredientRecord.save(function (err) {
    if (err) return err;
  });
  return response;
};

service.updateIngredient = async (payload) => {
  const { id, name, price, parseCalories: calories } = payload;
  const query = { _id: id };
  const updateIngredientRecord = {
    name,
    price,
    calories,
  };
  const response = await Ingredient.updateOne(
    query,
    updateIngredientRecord,
    function (err) {
      if (err) return err;
    }
  );
  return response;
};

service.deleteIngredient = async (id) => {
  const query = { _id: id };
  const response = await Ingredient.deleteOne(query, function (err) {
    if (err) return err;
  });
  return response;
};

module.exports = service;
