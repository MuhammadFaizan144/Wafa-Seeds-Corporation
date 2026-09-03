const User=require('../models/user-model')
const home=async(req,res)=>{
    try{
        res.send('All users');
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const userExists=await User.findOne({email})
        if(!userExists){
            return res.status(400).json({message:'User not found'})
        }
        const user=await User.findOne({email,password})
        if(user){
            res.status(200).json({
                message:'login successful',
                token:await userExists.generateToken(),
                userId:userExists._id.toString()
            })
        }else{
            res.status(400).json({message:'Invalid password'})
        }
    }
    catch(error){
        res.status(500).json({message:'not login'})
    }
}
const register=async(req,res)=>{
    try{
        const {username,email,phone,password}=req.body;
        const userExists=await User.findOne({email})
        if(userExists){
            return res.status(400).json({message:'User already exists'})
        }
        const userCreated=await User.create({username,email,phone,password})

        res.status(200).json({
            message:"register successful",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString()
        })
        
        res.status(200).json({message:userCreated})
    } catch (error) {
        res.status(500).json({message:'not register'})
    }
}
module.exports={home, register, login}