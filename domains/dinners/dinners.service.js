const Dinner = require("./dinner.model");

const service = {};

service.getList = async () => {
  /* const exerciseRecord = new Dinner({
    title: "test",
    price: "100",
    weight: 200,
    calories: 300,
    ingredients: ["610d1641021ea6999797ede4"],
  });
  await exerciseRecord.save(function (err) {
    if (err) return err;
  }); */
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

module.exports = service;
