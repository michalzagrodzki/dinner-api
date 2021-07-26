const express = require("express");
const router = express.Router();

const dinners = require("./../domains/dinners/dinners.controller");

router.get("/", dinners.list);
router.get("/details/:id", dinners.details);
router.post("/order", dinners.post);

module.exports = router;
