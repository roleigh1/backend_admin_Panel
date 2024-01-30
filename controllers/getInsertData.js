
const { ProductsDB, BestSellerItemsDB } = require("../models/models");


const insertNewProduct = async (req, res) => {
    const insertData = req.body.insertData;
    if(insertData.where === "products") {
      
            const Product = await ProductsDB.create({
                name:insertData.name,
                price:Number(insertData.price),
                image:"test",
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
}