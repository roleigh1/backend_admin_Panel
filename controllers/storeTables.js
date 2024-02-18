const {ProductsDB, BestSellerItemsDB} = require("../models/models"); 

const getProductTable = async(req,res) => {
    try {
        const products = await ProductsDB.findAll(); 
        res.json({products})
    } catch(error){
        console.error("Error getting Products", error); 
    }
}
const getBestsellerTable = async(req,res) => {
  try {
    const bestseller= await BestSellerItemsDB.findAll(); 
    res.json({bestseller}); 
  } catch (error) {
    console.error("Error getting Bestseller" , error); 
  }

}
module.exports = {
    getProductTable
}