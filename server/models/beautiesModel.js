const mongoose = require("mongoose")
const beautySchema = mongoose.Schema({
  poster:String,
  skin_type:String,
  hair_type:Number,
  eye_color:Number,
  lipstick_color:String,
  nail_polish_color:String,
  category:String
})
const BeautyModel = mongoose.model("beautie",beautySchema)
module.exports = {BeautyModel}