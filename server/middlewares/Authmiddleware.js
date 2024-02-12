const jwt = require("jsonwebtoken");
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
const refreshTokenKey = process.env.REFRESH_TOKEN_KEY;
const {BlacklistUserModel} = require("../models/Blacklistmodel")
const auth = async(req,res,next)=>{
    const accessToken = req.cookies["accessToken"];
    const refreshToken = req.cookies["refreshToken"];
    console.log(accessToken, refreshToken);
    console.log(req.cookies);
    const blacklistedUserToken = await BlacklistUserModel.findOne({accessToken})
    try {
        if(!blacklistedUserToken){
            jwt.verify( accessToken,accessTokenKey, function(err, decoded) {
                if(decoded){
                   req.userId = decoded.userId;
                   req.email = decoded.email;
                   next();
                }else{
                   jwt.verify( refreshToken,refreshTokenKey, function (err, decoded) {
                       if (decoded) {
                         var newToken = jwt.sign(
                           { email: decoded.email, userId: decoded.userId },
                           accessTokenKey,
                           {
                             expiresIn: "2m",
                             
                           }
                         );
                        //  res.cookie["accessToken"] = newToken;
                        res.cookie("accessToken", newToken,{httpOnly:true,secure:true,sameSite:"none"});

                         next();
                       } else {
                         res.status(400).send({ msg: "Please Login first" });
                       }
                     });
                }
             })

        }else{
            res.status(400).send({ msg: "Please Login again" });

        }
       ;
    } catch (error) {
            res.status(400).send({ error: error.message });

    }
}

module.exports = {auth}