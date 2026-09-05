const validate=(schema)=>async (req,res,next) => {
    try {
        const parsebody=await schema.parseAsynce(req.body)
        req.body=parsebody
        next()
    } catch (error) {
        const message=error.issues[0].message
        console.log(message)
        res.status(400).json({msg:message})
    }
}
module.exports=validate