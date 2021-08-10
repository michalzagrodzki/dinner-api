const express = require("express");
const router = express.Router();

// Controllers
const ordersController = require("./orders.controller");
// Validators
const { ordersValidator } = require("./orders.middleware");

router.get("/", ordersController.list);
router.get("/details/:id", ordersValidator.get, ordersController.get);
router.post("/", ordersValidator.post, ordersController.post);

module.exports = router;
