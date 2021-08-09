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
    const { id } = req.params;
    const response = service.postOrder(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

orders.postCustom = async (req, res, next) => {
  try {
    const { body } = req;
    const response = service.postCustomOrder(body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = orders;
