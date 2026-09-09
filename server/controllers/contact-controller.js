const Contact=require('../models/contact-model')
const contactForm=async(req,res)=>{
    try{
        const response=req.body;
        await Contact.create(response)
        return res.status(201).json({message:"Contact form submitted"})
    }catch(error){
        return res.status(500).json({message:"Internal server error in contact"})
    }
}
module.exports=contactForm