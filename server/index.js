const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT
const {userRouter} = require("./routes/useroutes")
const { connection } = require("./database/db")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const {auth} = require("./middlewares/Authmiddleware")
// const {DefaultProduct} = require("./routes/defaultproductRoute")
const {defaultProductRouter} = require("./routes/defaultRoute")
const {electronicRouter} = require("./routes/electronicsRoute")
const {beautyRouter} = require("./routes/beautyRoute")
const {groceryRouter} = require("./routes/groceryRoute")
const {clothingRouter} = require("./routes/clothingRoute")
const {furnitureRouter} = require("./routes/furnitureRoute")
const {allproductRouter} =require("./routes/allproductroutes")
const {twowheelerRouter}=require("./routes/twowheelersroutes")
app.use(express.json())
app.use(cors({
    origin:"http://127.0.0.1:5173",
    credentials: true,
    httpOnly:true
}))
app.use(cookieParser())
app.use("/user",userRouter)
app.use("/product",defaultProductRouter)
app.use("/electronic",electronicRouter)
app.use("/beauty",beautyRouter)

app.use("/grocery",groceryRouter)
app.use("/clothing",clothingRouter)
app.use("/furniture",furnitureRouter)
app.use("/twowheeler",twowheelerRouter)
app.use("/allproduct",allproductRouter)
app.listen(port,async()=>{
    try {
        await connection
        console.log(`express server is running on port ${port} and mongoDB is also connected`)
    //    DefaultProduct()
    } catch (error) {
       console.log({"msg":error}) 
    }
})