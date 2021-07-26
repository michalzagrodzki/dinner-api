const express = require("express");
const router = express.Router();

const info = require("./info");
const dinners = require("./dinners");

router.use("/", info);
router.use("/api/dinners", dinners);

module.exports = router;
