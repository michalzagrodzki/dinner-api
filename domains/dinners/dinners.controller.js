const service = require("./dinners.service");

const dinners = {};

dinners.list = async (req, res, next) => {
  try {
    const response = await service.getList();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getDetails(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.post = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = service.postDinner(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.postCustom = async (req, res, next) => {
  try {
    const { body } = req;
    const response = service.postCustomDinner(body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = dinners;
