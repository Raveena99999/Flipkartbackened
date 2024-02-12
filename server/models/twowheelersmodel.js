const mongoose = require("mongoose")
const twowheelerSchema = mongoose.Schema({
  poster:String,
  brand:String,
  price:Number,
  weight:Number,
  rating:Number,
  category:String
})
const TwowheelerModel = mongoose.model("twowheeler",twowheelerSchema)
module.exports = {TwowheelerModel}