const { Orders } = require('../models/models');

const countOrders = async (req, res) => {
    Orders.count().then(count => {
        console.log(" There are " + count + " orders in the database"); 
    })
    .catch(err => {
        console.log("Error when Counting Orders", err); 
    })

}
module.exports = { countOrders }