const express = require("express");
const router = express.Router();

// Controllers
const dinnersController = require("./dinners.controller");
// Validators
const { dinnersValidator } = require("./dinners.middleware");

router.get("/", dinnersController.list);
router.get("/details/:id", dinnersValidator.get, dinnersController.get);

module.exports = router;
