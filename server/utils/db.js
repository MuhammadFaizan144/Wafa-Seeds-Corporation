const mongoose=require('mongoose');
const URI=process.env.MONGODB_URL;
const connectDB=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}
module.exports=connectDB