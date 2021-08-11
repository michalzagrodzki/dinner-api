const Order = require("./orders.model");

const service = {};

service.getList = async () => {
  const query = Order.find(function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
};

service.getDetails = async (id) => {
  const query = Order.findById(id, function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
};

service.postOrder = async (payload) => {
  const {
    title,
    dinner_id,
    client_name,
    client_phone,
    client_email,
    evaluatedPrice: price,
    parseCalories: calories,
    parseWeight: weight,
    parsedIngredients: ingredients,
  } = payload;
  const orderRecord = new Order({
    title,
    dinner_id,
    client_name,
    client_phone,
    client_email,
    price,
    calories,
    weight,
    ingredients,
  });
  await orderRecord.save(function (err) {
    if (err) return err;
  });
  const response = {
    client_name,
    client_phone,
    client_email,
  };

  return response;
};

module.exports = service;
