const home=async(req,res)=>{
    try{
        res.send('All users');
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}
const register=async(req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:req.body})
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
}
module.exports={home, register}