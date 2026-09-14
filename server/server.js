require('dotenv').config();
const express = require('express');
const app=express();
const mongoose=require('mongoose');
const authRouter=require('./router/auth-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');
const contactRouter = require('./router/contact-router');
const cor=require('cors')
var corOption={
    origin:"http://localhost:5173",
    method:"GET,POST,PATCH,DELETE",
    credentials:true
}
app.use(express.json());
app.use(cor(corOption))
app.use("/api/auth",authRouter);
app.use('/api/form',contactRouter);
app.use(errorMiddleware)
const PORT=3000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port http://localhost:${PORT}`);
    })
})
