const express = require("express");
const router = express.Router();

// Controllers
const ordersController = require("./orders.controller");
// Validators
const { ordersValidator } = require("./orders.middleware");

router.get("/", ordersController.list);
router.get("/details/:id", ordersValidator.get, ordersController.get);
router.post("/order/:id", ordersValidator.post, ordersController.post);
router.post(
  "/custom/order",
  ordersValidator.postCustom,
  ordersController.postCustom
);

module.exports = router;
