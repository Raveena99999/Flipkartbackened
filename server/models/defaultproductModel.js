const mongoose = require("mongoose")
const defaultProductSchema = mongoose.Schema({
 id:{type:String,unique:true,required:true},
 url:String,
 detailUrl:String,
 title:Object,
 price:Object,
 quantity:Number,
 description:String,
 discount:String,
 tagline:String
})
const DefaultProductModel = mongoose.model("product",defaultProductSchema)
module.exports ={DefaultProductModel}