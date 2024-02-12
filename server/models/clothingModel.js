const mongoose = require("mongoose")
const clothingSchema = mongoose.Schema({
  poster:String,
  brand:String,
  size:String,
  color:String,
  material:String,
  price:Number,
  quantity:Number,
  
  rating:Number,
  category:String
})
const ClothingModel = mongoose.model("clothing",clothingSchema)
module.exports = {  ClothingModel}