
const { Orders, FinishedOrders } = require("../models/models");

const getAllOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const pageSize = parseInt(req.query.pageSize) || 10; 
        const offset = ( page - 1 ) * pageSize; 
        const allOrders = await Orders.findAll({
            offset,
            limit:pageSize,
        });
        res.status(200).json({ allOrders })
    } catch (error) {
        console.error("Error getting all orders", error);
        res.status(400).json({ message: "Error sending Data", error: error.message });
    }
}
const finishOrder = async (req, res) => {

    const { finishedOrderID } = req.body;
    console.log(finishedOrderID); 
    res.status(200).json({message:"order sucessful moved ", finishOrder})

    const findFinishedOrder = await Orders.findByPk(finishedOrderID);
    console.log(findFinishedOrder); 
    
    const finishedData = {
        email: findFinishedOrder.email,
        item: findFinishedOrder.item,
        total: findFinishedOrder.total,
        pickupdate: findFinishedOrder.pickupdate,
        location : findFinishedOrder.location,
        createdAt:findFinishedOrder.createdAt,

    }

       await FinishedOrders.create(finishedData); 


}



module.exports = {
    getAllOrders,
    finishOrder
}