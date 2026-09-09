require('dotenv').config();
const express = require('express');
const app=express();
const mongoose=require('mongoose');
const authRouter=require('./router/auth-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');
const contactRouter = require('./router/contact-router');
app.use(express.json());
app.use("/api/auth",authRouter);
app.use('/api/form',contactRouter);
app.use(errorMiddleware)
const PORT=3000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port http://localhost:${PORT}`);
    })
})
