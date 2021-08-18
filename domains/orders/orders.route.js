const express = require("express");
const router = express.Router();

// Controllers
const ordersController = require("./orders.controller");
// Validators
const { ordersValidator } = require("./orders.middleware");

router
  .route("/")
  .get(ordersController.list)
  .post(ordersValidator.post, ordersController.post);
router
  .route("/details/:id")
  .get(ordersValidator.get, ordersController.get)
  .put(ordersValidator.post, ordersController.put)
  .delete(ordersValidator.get, ordersController.delete);

module.exports = router;
