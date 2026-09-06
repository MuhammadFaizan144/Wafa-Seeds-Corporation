const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})
userSchema.pre("save",async function(next){
    console.log("per method",this)
    const user=this
    if(!user.isModified("password")){
        next()
    }
    try{
        const saltRound=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(user.password,saltRound)
        user.password=hashedPassword

    }catch(error){
        next(error)
    }
})
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateToken=async function(){
    try{
        return jwt.sign({
            id:this._id,
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn:"3d"
        })
    }
    catch(error){
        console.error(error)
    }
}
const User=mongoose.model('User',userSchema)
module.exports=User