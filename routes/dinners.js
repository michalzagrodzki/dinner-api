const express = require("express");
const router = express.Router();

/* GET dinners listing. */
router.get("/", function (req, res, next) {
  res.json({ title: "List of dinners" });
});

module.exports = router;
