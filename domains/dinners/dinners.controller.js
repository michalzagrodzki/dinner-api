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

dinners.details = async (req, res, next) => {
  try {
    const response = await service.getDetails(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.post = async (req, res, next) => {
  try {
    const response = service.postDinner(req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = dinners;
