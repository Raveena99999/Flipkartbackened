const express = require("express")
const clothingRouter = express.Router()
const {ClothingModel} = require("../models/clothingModel")
const {auth} =require("../middlewares/Authmiddleware")

clothingRouter.get("/",auth,async(req,res)=>{
    try {
        const clothing = await ClothingModel.find()
        console.log(clothing)
        res.status(200).send(clothing)
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
})
module.exports = {clothingRouter}