const service = require("./orders.service");

const orders = {};

orders.list = async (req, res, next) => {
  try {
    const response = await service.getList();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

orders.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getDetails(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

orders.post = async (req, res, next) => {
  try {
    const {
      title,
      dinner_id,
      client_name,
      client_phone,
      client_email,
      price,
      calories,
      weight,
      ingredients,
    } = req.body;
    const request = {
      title,
      dinner_id,
      client_name: client_name || "default client",
      client_phone: client_phone || "no phone provided",
      client_email: client_email || "no email provided",
      price,
      calories,
      weight,
      ingredients,
    };
    const response = service.postOrder(request);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = orders;
