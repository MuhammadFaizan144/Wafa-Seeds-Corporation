const getAllUsers=async(req,res)=>{
    try{
        res.send('All users');
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}
module.exports={getAllUsers}