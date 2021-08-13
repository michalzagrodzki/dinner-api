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

Project has three following models: Dinner, Ingredients, Orders.

Dinner:

```javascript
const dinnerSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true, min: 0 },
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
  price: { type: String, required: true, min: 0 },
  calories: { type: Number, required: true, min: 0 },
  weight: { type: Number },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});
```

Ingredients:

```javascript
const ingredientSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true, min: 0 },
  calories: { type: Number, required: true, min: 0 },
});
```
