const express = require("express");
const allproductRouter = express.Router();
const { AllproductModel } = require("../models/allproducts");
allproductRouter.get("/", async (req, res) => {
  try {
    const { rating, productittle,  category } = req.query;
    const queryObj = {};
    if (productittle) {
      queryObj.productittle = { $regex: productittle, $options: "i" };
    }
    // if (category) {
    //   queryObj.category =  { $regex: category, $options: "i" };
    // }
    // if (rating) {
    //   queryObj.rating = { $gte: rating };
    // }
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
