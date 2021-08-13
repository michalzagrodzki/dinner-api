const express = require("express");
const router = express.Router();

const info = require("./info");
const dinners = require("./../domains/dinners/dinners.route");
const ingredients = require("../domains/ingredients/ingredients.route");
const orders = require("../domains/orders/orders.route");
const api_documentation = require("../docs/docs.route");

const domainRoutes = [
  {
    path: "/dinners",
    domain: dinners,
  },
  {
    path: "/ingredients",
    domain: ingredients,
  },
  {
    path: "/orders",
    domain: orders,
  },
  {
    path: "/api-docs",
    domain: api_documentation,
  },
];

router.use("/", info);
domainRoutes.forEach((route) => {
  router.use(`/v1${route.path}`, route.domain);
});

module.exports = router;
