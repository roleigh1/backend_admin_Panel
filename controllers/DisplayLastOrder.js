const { get } = require('http');
const { Orders } = require('../models/models');

const getlastOrder = async (req, res) => {
    try {
        const lastRecord = await Orders.findOne({
            order: [['id', 'DESC']],
        });

        if (lastRecord) {
          
            lastRecord.toJSON();
            const lastOrderDetails = {
                id: lastRecord.id,
                email: lastRecord.email,
                items: lastRecord.item,
                totalPrice: lastRecord.total,
                pickupdate: lastRecord.pickupdate,
                created: lastRecord.createdAt
            }
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