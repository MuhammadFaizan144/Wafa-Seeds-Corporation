require('dotenv').config();
const express = require('express');
const app=express();
const mongoose=require('mongoose');
const adminRouter=require('./router/admin-router');
const connectDB = require('./utils/db');
app.use(express.json());
app.use("/api/auth",adminRouter);
const PORT=3000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port http://localhost:${PORT}`);
    })
})
