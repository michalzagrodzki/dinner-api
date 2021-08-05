const { mongoose } = require("./../../service");
const { Schema } = mongoose;

const dinnerSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  weight: { type: Number, required: true, min: 0 },
  calories: { type: Number, required: true, min: 0 },
});

const Dinner = mongoose.model("Dinner", dinnerSchema);

module.exports = Dinner;
