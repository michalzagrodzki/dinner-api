const { mongoose } = require("./../../service");
const { Schema } = mongoose;

const dinnerSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true, min: 0 },
  weight: { type: Number, required: true, min: 0 },
  calories: { type: Number, required: true, min: 0 },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});

const Dinner = mongoose.model("Dinner", dinnerSchema);

module.exports = Dinner;
