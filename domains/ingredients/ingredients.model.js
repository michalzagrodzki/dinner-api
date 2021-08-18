const { mongoose } = require("../../service");
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  calories: { type: Number, required: true, min: 0 },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
