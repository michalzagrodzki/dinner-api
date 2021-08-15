const express = require("express");
const router = express.Router();

// Controllers
const ingredientsController = require("./ingredients.controller");
// Validators
const { ingredientsValidator } = require("./ingredients.middleware");

router.get("/", ingredientsController.list);
router.get("/details/:id", ingredientsValidator.get, ingredientsController.get);

module.exports = router;
