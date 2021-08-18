const { mongoose } = require("./../../service");
const { Schema } = mongoose;

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

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
