
const { findSourceMap } = require("module");
const { Orders, FinishedOrders } = require("../models/models");


const getAllOrders = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;  
        const pageSize = parseInt(req.query.pageSize) || 10; 

        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const totalCount = await Orders.count();  

        const allOrders = await Orders.findAll({
            offset: startIndex,
            limit: pageSize,
        });

        const results = {
            page,
            pageSize,
            totalCount,
            totalPages: Math.ceil(totalCount / pageSize),
            orders: allOrders,
        };

        res.status(200).json(results);
    } catch (error) {
        console.error("Error getting all orders", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
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