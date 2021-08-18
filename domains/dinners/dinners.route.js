const express = require("express");
const router = express.Router();

// Controllers
const dinnersController = require("./dinners.controller");
// Validators
const { dinnersValidator } = require("./dinners.middleware");

router
  .route("/")
  .get(dinnersController.list)
  .post(dinnersValidator.post, dinnersController.post);

router
  .route("/details/:id")
  .get(dinnersValidator.get, dinnersController.get)
  .put(dinnersValidator.post, dinnersController.put)
  .delete(dinnersValidator.get, dinnersController.delete);

module.exports = router;
