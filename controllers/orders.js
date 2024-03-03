
const { findSourceMap } = require("module");
const { Orders, FinishedOrders } = require("../models/models");


const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Orders.findAll();
        res.status(200).json({ allOrders })
    } catch (error) {
        console.error("Error getting all orders", error);
        res.status(400).json({ message: "Error sending Data" });
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