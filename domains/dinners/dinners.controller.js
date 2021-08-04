const service = require("./dinners.service");

const dinners = {};

dinners.list = async (req, res, next) => {
  try {
    const response = await service.getList();
    if (response.error) throw response.error;
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.get = async (req, res, next) => {
  try {
    const response = await service.getDetails(req.params.id);
    if (response.error) throw response.error;
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.post = async (req, res, next) => {
  try {
    const response = service.postDinner(req.params.id);
    if (response.error) throw response.error;
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

dinners.postCustom = async (req, res, next) => {
  try {
    const response = service.postCustomDinner(req.body);
    if (response.error) throw response.error;
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = dinners;
