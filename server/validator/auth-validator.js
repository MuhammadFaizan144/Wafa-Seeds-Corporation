const {z}=require('zod')
const signupSchema=z.object({
    username:z
    .string({required_error:'username is required'})
    .min(3,{message:'username must be at least 3 characters long'})
    .max(255,{message:'username must be at most 255 characters long'}).trim(),
    email:z.string().email({message:'Invalid email address'})
    .trim()
    .min(10,{message:'email must be at least 10 characters long'})
    .max(255,{message:'email must be at most 255 characters long'}),
    phone:z.string({required_error:'phone is required'})
    .min(10,{message:'phone must be at least 10 characters long'})
    .max(20,{message:'phone must be at most 20 characters long'}).trim(),
    password:z
    .string({required_error:'password is required'})
    .min(6,{message:'password must be at least 6 characters long'})
    .max(255,{message:'password must be at most 255 characters long'})
    .trim(),
})
module.exports=signupSchema