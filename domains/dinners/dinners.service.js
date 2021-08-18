const Dinner = require("./dinner.model");

const service = {};

service.getList = async () => {
  const query = Dinner.find(function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
};

service.getDetails = async (id) => {
  const query = Dinner.findById(id, function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
};

service.postDinner = async (payload) => {
  const {
    title,
    price,
    parseCalories: calories,
    parseWeight: weight,
    ingredients,
  } = payload;
  const dinnerRecord = new Dinner({
    title,
    price,
    weight,
    calories,
    ingredients,
  });
  const response = await dinnerRecord.save(function (err) {
    if (err) return err;
  });
  return response;
};

service.updateDinner = async (payload) => {
  const {
    id,
    title,
    price,
    parseWeight: weight,
    parseCalories: calories,
    ingredients,
  } = payload;
  const query = { _id: id };
  const updateDinnerRecord = {
    title,
    price,
    weight,
    calories,
    ingredients,
  };
  const response = await Dinner.updateOne(
    query,
    updateDinnerRecord,
    function (err) {
      if (err) return err;
    }
  );
  return response;
};

service.deleteDinner = async (id) => {
  const query = { _id: id };
  const response = await Dinner.deleteOne(query, function (err) {
    if (err) return err;
  });
  return response;
};

module.exports = service;
