
const { Orders} = require("../models/models"); 

const getAllOrders = async (req,res) => {
    try {
        const allOrders = await Orders.findAll(); 
        res.status(200).json({allOrders})
    } catch( error ) {
        console.error("Error getting all orders", error); 
        res.status(400).json({message:"Error sending Data"}); 
    }
}
module.exports = {
    getAllOrders
}