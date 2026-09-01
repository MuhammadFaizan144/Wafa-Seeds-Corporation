const express = require('express');
const app=express();
const adminRouter=require('./router/admin-router')
app.use(adminRouter);
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})
