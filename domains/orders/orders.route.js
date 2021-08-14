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

/**
 * @swagger
 * components:
 *   schemas:
 *     NewOrder:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: John John
 *     Order:
 *       allOf:
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The dinner ID.
 *               example: 0
 *         - $ref: '#/components/schemas/Dinner'
 */

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API for orders in the system.
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve a list of Orders.
 *     tags: [Orders]
 *     description: Retrieve a list of orders from Dinners API.
 *     responses:
 *       200:
 *         description: A list of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Orders'
 */
