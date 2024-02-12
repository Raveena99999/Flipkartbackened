const express = require("express")
const beautyRouter = express.Router()
const {BeautyModel} = require("../models/beautiesModel")
const {auth} =require("../middlewares/Authmiddleware")
beautyRouter.get("/",async(req,res)=>{
    try {
        const beauty = await BeautyModel.find()
        console.log(beauty)
        res.status(200).send(beauty)
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
})

// beautyRouter.get("/beautydata",async(req,res)=>{
//     try {
//         const beauty = await BeautyModel.find()
//         console.log(beauty)
//         res.status(200).send(beauty)
//     } catch (error) {
//         res.status(400).send({msg:error.message})

//     }
// })
module.exports = {beautyRouter}