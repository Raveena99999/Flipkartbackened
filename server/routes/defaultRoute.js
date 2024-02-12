const express = require("express")
const { DefaultProductModel } = require("../models/defaultproductModel")
const defaultProductRouter= express.Router()
defaultProductRouter.get("/",async(req,res)=>{
   try {
      const product =await DefaultProductModel.find()
      console.log(product)
      res.status(200).send(product)

   } catch (error) {
    res.status(400).send({msg:error.message})
   }
})
module.exports = {defaultProductRouter}