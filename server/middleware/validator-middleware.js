const validate=(schema)=>async (req,res,next) => {
    try {
        const parsebody=await schema.parseAsync(req.body)
        req.body=parsebody
        next()
    } catch (err) {
        const extraDetails=err.issues[0].message
        const message="Fill the input properly"
        const status=422
        const error={
            status,
            message,
            extraDetails
        }
        console.log(error)
        next(error)
    }
}
module.exports=validate