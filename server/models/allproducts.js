const mongoose = require("mongoose")
const allproductsSchema = mongoose.Schema({
  poster:String,
  productittle:String,
  category:String,
  rating:Number
})
const AllproductModel = mongoose.model("allproduct",allproductsSchema)
module.exports = {AllproductModel}