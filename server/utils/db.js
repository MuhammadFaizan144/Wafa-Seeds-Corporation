const mongose=require('mongoose');
const URI=''
const connectDB=async()=>{
    try {
        await mongoose.connect(URI)
}