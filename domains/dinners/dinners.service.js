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

module.exports = service;
