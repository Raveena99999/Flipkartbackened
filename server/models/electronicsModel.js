const mongoose = require("mongoose")
const electronicSchema = mongoose.Schema({
  poster:String,
  brand:String,
  price:Number,
  weight:Number,
  color:String,
  category:String
})
const ElectronicModel = mongoose.model("electronic",electronicSchema)
module.exports = {ElectronicModel}