const mongoose = require("mongoose");
const pizzaSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  image:  { type: String, required: true },
  toppings: [ { type: String, required: true }],
  price: { type: Number, required: true },
  description: {type: String, default: "No description"}
});

module.exports = mongoose.model("Pizza", pizzaSchema);
