const express = require("express");
const router = express.Router();

const dinners = require("./dinners.controller");

router.get("/", dinners.list);
router.get("/details/:id", dinners.details);
router.post("/order/:id", dinners.post);
router.post("/custom/order", dinners.postCustom);

module.exports = router;
