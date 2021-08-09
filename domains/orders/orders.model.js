const { mongoose } = require("./../../service");
const { Schema } = mongoose;

const orderSchema = new Schema({
  title: { type: String },
  dinner_id: { type: Schema.Types.ObjectId, ref: "Dinner" },
  price: { type: String, required: true, min: 0 },
  calories: { type: Number, required: true, min: 0 },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});

const Dinner = mongoose.model("Order", orderSchema);

module.exports = Dinner;
