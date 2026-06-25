const express = require("express");
const { getProducts, postProducts, deleteProduct, updateProduct } = require("../controllers/productController");
const router= express.Router();

router.get("/",getProducts);
router.post("/",postProducts);
router.delete("/:id",deleteProduct)
router.put("/:id",updateProduct);
module.exports =router;