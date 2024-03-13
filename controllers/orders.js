
const { Orders, FinishedOrders } = require("../models/models");

const getAllOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const offset = (page - 1) * pageSize;
        const allOrders = await Orders.findAll({
            offset,
            limit: pageSize,
        });
        res.status(200).json({ allOrders })
    } catch (error) {
        console.error("Error getting all orders", error);
        res.status(400).json({ message: "Error sending Data", error: error.message });
    }
}
const finishOrder = async (req, res) => {
    try {
        const { finishedOrderID } = req.body;
        const oldOrder = await Orders.findAll({
            where: finishedOrderID
        })
        const newOldOrder = oldOrder.map(item => ({
            id: item.id,
            email: item.email,
            item: item.item,
            total: item.total,
            pickupdate: item.pickupdate,
            location: item.location,

        }))
        console.log("New Old Order", newOldOrder);
        const finishedOrder = await FinishedOrders.create({
            email: newOldOrder.email,
            item: newOldOrder.item,
            total: newOldOrder.total,
            pickupdate: newOldOrder.pickupdate,
            location: newOldOrder.location,
        });
        res.status(200).json({ message: "Selected Order", finishedOrder });
    } catch (error) {
        console.error("Error getting old order", error);
        res.status(400).json({ message: "Error getting old Order", error });
    }
}



module.exports = {
    getAllOrders,
    finishOrder
}