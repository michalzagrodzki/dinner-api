const express = require("express");
const router = express.Router();

// Controllers
const dinnersController = require("./dinners.controller");
// Validators
const { dinnersValidator } = require("./dinners.middleware");

router.get("/", dinnersController.list);
router.get("/details/:id", dinnersValidator.get, dinnersController.get);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     NewDinner:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: John John
 *     Dinner:
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
 *   name: Dinners
 *   description: API for dinners in the system.
 */

/**
 * @swagger
 * /dinners:
 *   get:
 *     summary: Retrieve a list of Dinners.
 *     tags: [Dinners]
 *     description: Retrieve a list of dinners from Dinners API.
 *     responses:
 *       200:
 *         description: A list of dinners.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Dinner'
 */
