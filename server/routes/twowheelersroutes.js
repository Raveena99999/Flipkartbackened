const express = require("express")
const twowheelerRouter = express.Router()
const {TwowheelerModel} = require("../models/twowheelersmodel")
const {auth} =require("../middlewares/Authmiddleware")

twowheelerRouter.get("/",auth,async(req,res)=>{
    try {
        const twowheeler = await TwowheelerModel.find()
        console.log(twowheeler)
        res.status(200).send(twowheeler)
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
})
module.exports = {twowheelerRouter}