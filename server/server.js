require('dotenv').config();
const express = require('express');
const app=express();
const mongoose=require('mongoose');
const adminRouter=require('./router/admin-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');
app.use(express.json());
app.use("/api/auth",adminRouter);
app.use(errorMiddleware)
const PORT=3000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port http://localhost:${PORT}`);
    })
})
