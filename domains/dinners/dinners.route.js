const express = require("express");
const router = express.Router();

// Controllers
const dinnersController = require("./dinners.controller");
// Validators
const { dinnersValidator } = require("./domains/dinners/dinners.middleware");

router.get("/", dinnersController.list);
router.get("/details/:id", dinnersValidator.get, dinnersController.get);
router.post("/order/:id", dinnersValidator.post, dinnersController.post);
router.post("/custom/order", dinnersController.postCustom.postCustom);

module.exports = router;
