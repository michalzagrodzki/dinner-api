const express = require("express");
const router = express.Router();

// Controllers
const ingredientsController = require("./ingredients.controller");
// Validators
const { ingredientsValidator } = require("./ingredients.middleware");

router
  .route("/")
  .get(ingredientsController.list)
  .post(ingredientsValidator.post, ingredientsController.post);

router
  .route("/details/:id")
  .get(ingredientsValidator.get, ingredientsController.get)
  .put(ingredientsValidator.post, ingredientsController.put)
  .delete(ingredientsValidator.get, ingredientsController.delete);

module.exports = router;
