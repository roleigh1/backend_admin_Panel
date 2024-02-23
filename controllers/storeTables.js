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
const getDeleteID = async(req,res) => {
  try {
    const { idForDelete } = req.body;
    console.log("Selected Id recived", idForDelete); 
    res.status(200).json({message:"Got selected ID", idForDelete}); 
   
    const DeleteFromDB = await ProductsDB.destroy({
      where:{
       id: idForDelete
      }
    })

  } catch (error) {
    console.error("Error receiving selected ID",error); 
    res.status(400).json({message:"Error sending post request"})
  }

}
module.exports = {
    getProductTable,
    getBestsellerTable,
    getDeleteID
}