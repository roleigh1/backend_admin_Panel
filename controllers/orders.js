
const { Orders, FinishedOrders } = require("../models/models");





const getAllOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const offset = (page - 1) * pageSize;
        let orders; 
        switch(req.query.type) {
            case 'new':
                orders = await Orders.findAll({
                    offset,
                    limit: pageSize
                });
                break; 
            case 'finished':
                orders = await FinishedOrders.findAll({
                    offset,
                    limit: pageSize
                });
                break;
            default:
                orders = await Orders.findAll({
                    offset,
                    limit: pageSize
                })
        }
        res.status(200).json({ orders });
    } catch (error) {
        console.error("Error getting all orders", error);
        res.status(400).json({ message: "Error sending Data", error: error.message });
    }
}
const finishOrder = async (req, res) => {
    try {
        const { finishOrderId } = req.body;
        console.log(finishOrderId);
        const oldOrders = await Orders.findAll({
            where: {
                id: finishOrderId
            }
        });
        const finishedOrders = await FinishedOrders.bulkCreate(oldOrders.map(oldOrder => ({
            id: oldOrder.id,
            email: oldOrder.email,
            item: oldOrder.item,
            total: oldOrder.total,
            pickupdate: oldOrder.pickupdate,
            location: oldOrder.location
        })));
        res.status(200).json({ message: "Selected Order", finishedOrders });
        const deleteFinishedOrder = await Orders.destroy({
            where: {
                id:finishOrderId
            }
        })
        console.log("Finished order is deleted", deleteFinishedOrder);

    } catch (error) {
        console.error("Error getting old order", error);
        res.status(400).json({ message: "Error getting old Order", error });
    }
}



module.exports = {
    getAllOrders,
    finishOrder
}