const Contact=require('../models/contact-model')
const contactForm=async(req,res)=>{
    try{
        const response=req.body
        await Contact.create(response)
        return res.status(200).json({message:"Contact form submitted"})
    }catch(error){
        return res.status(500).json({message:"Internal server error"})
    }
}
module.exports=contactForm