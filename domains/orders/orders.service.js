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
  const response = "post order;";
  return response;
};

service.postCustomOrder = async (payload) => {
  const response = "post custom order;";
  return response;
};

module.exports = service;
