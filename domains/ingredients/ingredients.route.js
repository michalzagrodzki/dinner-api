const express = require("express");
const router = express.Router();

// Controllers
const ingredientsController = require("./ingredients.controller");
// Validators
const { ingredientsValidator } = require("./ingredients.middleware");

router.get("/", ingredientsController.list);
router.get("/details/:id", ingredientsValidator.get, ingredientsController.get);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     NewIngredient:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: John John
 *     Ingredient:
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
 *   name: Ingredients
 *   description: API for orders in the system.
 */

/**
 * @swagger
 * /ingredients:
 *   get:
 *     summary: Retrieve a list of Ingredients.
 *     tags: [Ingredients]
 *     description: Retrieve a list of ingredients from Dinners API.
 *     responses:
 *       200:
 *         description: A list of ingredients.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Ingredients'
 */
