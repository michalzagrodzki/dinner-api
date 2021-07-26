const express = require("express");
const router = express.Router();

const info = require("./info");
const dinners = require("./../domains/dinners/dinners.route");

router.use("/", info);
router.use("/api/dinners", dinners);

module.exports = router;
