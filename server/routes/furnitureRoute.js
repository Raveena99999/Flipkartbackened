const express = require("express")
const furnitureRouter = express.Router()
const {FurnitureModel} = require("../models/furnitureModel")
const {auth} =require("../middlewares/Authmiddleware")

furnitureRouter.get("/",auth,async(req,res)=>{
    try {
        const furniture = await FurnitureModel.find()
        console.log(furniture)
        res.status(200).send(furniture)
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
})
module.exports = {furnitureRouter}