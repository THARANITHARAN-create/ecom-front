const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routers/productRoutes")
require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT
const app=express()
app.use(express.json())
app.use(cors())
connectDB();
app.use("/api/products",productRoutes)
app.listen(PORT,()=>{
    console.log(`server running on the ${PORT}`);

})