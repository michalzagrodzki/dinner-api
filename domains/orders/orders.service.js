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
  const response = await orderRecord.save(function (err) {
    if (err) return err;
  });
  return response;
};

service.updateOrder = async (payload) => {
  const {
    id,
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
  const query = { _id: id };
  const updateOrderRecord = {
    title,
    dinner_id,
    client_name,
    client_phone,
    client_email,
    price,
    calories,
    weight,
    ingredients,
  };
  const response = await Order.updateOne(
    query,
    updateOrderRecord,
    function (err) {
      if (err) return err;
    }
  );
  return response;
};

service.deleteOrder = async (id) => {
  const query = { _id: id };
  const response = await Order.deleteOne(query, function (err) {
    if (err) return err;
  });
  return response;
};

module.exports = service;
