
const { ProductsDB, BestSellerItemsDB } = require("../models/models");

const uploadImage = async (req,res) => {
    try{
      if(!req.file) {
          return res.status(400).json({ error:"No image provided"}); 
      }
     var imagePath = req.file.path;
      console.log(imagePath); 
    } catch (error) {
      console.error(error); 
    }
  
  }

const insertNewProduct = async (req, res,imagePath) => {
    const insertData = req.body.insertData;
    
    if(insertData.where === "products") {
      
            const Product = await ProductsDB.create({
                name:insertData.name,
                price:Number(insertData.price),
                image:imagePath,
                type:insertData.type,

            });
            console.log("Product generated ID:",Product.id);
  
     
    } else {
        const Bestseller = await BestSellerItemsDB.create({
            name:insertData.name,
            price:Number(insertData.price),
            image:"test",
            type:insertData.type,
        })
        console.log("Product generated ID:",Bestseller.id)
    }
    
   
}


module.exports = {
    insertNewProduct,
    uploadImage 
}