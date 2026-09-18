const jwt=require('jsonwebtoken')
const User=require('../models/user-model')
const authMiddleware=async (req,res,next) => {
    const token=req.header('Authorization')
    if(!token){
        res.status(200).json({message:"Token not provided"})
    }
    const jwttoken=token.replace("Bearer","").trim()
    console.log("",jwttoken)
    try {
        const isVerified=jwt.verify(jwttoken,process.env.JWT_SECRET_KEY)
        const userData=await User.findOne({email:isVerified.email}).select({
            password:0,
        })
        console.log(userData)
        req.user=userData;
        req.token=token;
        req.user=userData._id;
        next()
    } catch (error) {
        return res.status(401).json({message:"Unathorized token"})
    }
    
}
module.exports=authMiddleware