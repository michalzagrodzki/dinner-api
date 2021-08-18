# Node.js REST API for Dinners App

This repository is an example for REST API built with Express.js, MongoDB.

## Key concepts

- This project is ready to work with any clientside app
- Architecture follows Domain Driven Design
- Code structured in modules
- Body field validators
- Params validators

## Tech stack

Node.js, Express.js, MongoDB

## Running project

Clone repository:

```git
git clone git@github.com:michalzagrodzki/dinner-api.git
```

Install dependencies:

```npm
npm install
```

Run project:

```npm
npm run start
```

## Project models

Project has three following models: Dinners, Ingredients, Orders.

Dinners:

```javascript
const dinnerSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  weight: { type: Number, required: true, min: 0 },
  calories: { type: Number, required: true, min: 0 },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
```

Orders:

```javascript
const orderSchema = new Schema({
  title: { type: String },
  dinner_id: { type: Schema.Types.ObjectId, ref: "Dinner" },
  client_name: { type: String, required: true },
  client_phone: { type: String, required: true },
  client_email: { type: String },
  price: { type: String, required: true },
  calories: { type: Number, required: true, min: 0 },
  weight: { type: Number, min: 0 },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});
```

Ingredients:

```javascript
const ingredientSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  calories: { type: Number, required: true, min: 0 },
});
```

## Environment variables

Environment variables are located in .env file

```bash
# URL of the Mongo DB
DB_URI=mongodb://127.0.0.1:27017/dinner-api
```

## API Documentation

API endpoints and their specifications are available through following link: `http://localhost:2000/api/v1/api-docs/` in your browser. This documentation page is generated using the [swagger](https://swagger.io/) definitions written as yaml files.

### API Endpoints

List of available routes:

**Dinner routes**:\
`POST /v1/dinners` - create a dinner\
`GET /v1/dinners` - get all dinners\
`GET /v1/dinners/:dinnerId` - get dinner\
`PUT /v1/dinners/:dinnerId` - update dinner\
`DELETE /v1/dinners/:dinnerId` - delete dinner

**Ingredient routes**:\
`POST /v1/ingredients` - create an ingredient\
`GET /v1/ingredients` - get all ingredients\
`GET /v1/ingredients/:ingredientId` - get ingredient\
`PUT /v1/ingredients/:ingredientId` - update ingredient\
`DELETE /v1/ingredients/:ingredientId` - delete ingredient

**Order routes**:\
`POST /v1/orders` - create an order\
`GET /v1/orders` - get all orders\
`GET /v1/orders/:orderId` - get order\
`PUT /v1/orders/:orderId` - update order\
`DELETE /v1/orders/:orderId` - delete order
