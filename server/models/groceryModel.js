const mongoose = require("mongoose")
const grocerySchema = mongoose.Schema({
  poster:String,
  product_name:String,
  price:Number,
  quantity:Number,
  expiration_time:String,
  rating:Number,
  category:String
})
const GroceryModel = mongoose.model("grocerie",grocerySchema)
module.exports = {GroceryModel}