const { get } = require('http');
const { Orders } = require('../models/models');

const getlastOrder = async (req, res) => {
    try {
        const lastRecord = await Orders.findAll({
            order: [['id', 'DESC']],
            limit:5,
        });

        if (lastRecord && lastRecord.length > 0) {
      
            const lastOrderDetails = lastRecord.map((record) => ({
                id: record.id,
                email: record.email,
                items: record.item,
                totalPrice: record.total,
                pickupdate: record.pickupdate,
                created: record.createdAt,
            }));
            console.log(lastOrderDetails); 
            res.json(lastOrderDetails)
        } else {
            console.log("Table is empty");

        }
    } catch (error) {
        console.error('Error:', error);
   
    }
}
 


module.exports = {getlastOrder}; 