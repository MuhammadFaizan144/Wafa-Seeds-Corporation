const validate=(schema)=>async (req,res,next) => {
    try {
        const parsebody=await schema.parseAsync(req.body)
        req.body=parsebody
        next()
    } catch (err) {
        const message=err.issues[0].message
        const status=422
        const error={
            status,
            message
        }
        console.log(error)
        next(error)
    }
}
module.exports=validate