const mongoose = require("mongoose");
const furnitureSchema = mongoose.Schema({
  poster: String,
  price: Number,

  brand: String,
  material: String,
  color: String,

  rating: Number,
  category: String,
});
const FurnitureModel = mongoose.model("furniture", furnitureSchema);
module.exports = { FurnitureModel };
