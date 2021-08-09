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
  console.log("posting orderd");
  console.log(payload);
  const response = "post order;";
  return response;
};

module.exports = service;
