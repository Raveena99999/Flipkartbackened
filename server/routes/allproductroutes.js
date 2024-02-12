const express = require("express");
const allproductRouter = express.Router();
const { AllproductModel } = require("../models/allproducts");
allproductRouter.get("/", async (req, res) => {
  try {
    const {  productittle } = req.query;
    const queryObj = {};
    if (productittle) {
      queryObj.productittle = { $regex: productittle, $options: "i" };
    }
    
    const allproduct = await AllproductModel.find(queryObj).sort({
      rating: -1,
    });
 console.log(allproduct);
    res.send(allproduct);
  } catch (error) {
    console.log(error)
    res.send(error.message);
  }
});

module.exports = { allproductRouter };
