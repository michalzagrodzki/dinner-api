const express = require("express");
const router = express.Router();

// Controllers
const ordersController = require("./orders.controller");
// Validators
const { ordersValidator } = require("./orders.middleware");

router.get("/", ordersController.list);
router
  .route("/details/:id")
  .get(ordersValidator.get, ordersController.get)
  .put(ordersValidator.post, ordersController.put)
  .delete(ordersValidator.get, ordersController.delete);
router.post("/", ordersValidator.post, ordersController.post);

module.exports = router;
