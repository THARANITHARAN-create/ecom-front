const Product = require("../models/Product");
exports.getProducts =async(req,res)=>{
    try {
        const products=await Product.find();
        res.json(products);
    } catch (error) {
       console.log(error);
       res.status(500).json({error:"Server Error"});
    }
}
exports.postProducts=async(req,res)=>{
    try {
    const{name,price,description}=req.body;
    const newProduct=new Product({
        name,price,description
    })  
    await newProduct.save();
    res.status(201).json(newProduct);
    } 
    catch (error) {
        console.log(error);
       res.status(500).json({error:"Server Error"}); 
    }
}
exports.deleteProduct=async(req,res)=>{
    try {
    const deleted=await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
       message:"Product Deleted", 
    })
    } catch (error) {
       console.log(error);
       res.status(500).json({error:"Server Error"});  
    }
}
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        description,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};
