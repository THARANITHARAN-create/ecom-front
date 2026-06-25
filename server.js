const express = require("express");
const connectDB = require("./config/db");
const productRoutes= require("./routes/productRoutes")
require("dotenv").config();

const app= express()
app.use(express.json()); 
connectDB();
const PORT=process.env.PORT;

app.use("/api/products",productRoutes)
app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`);
})