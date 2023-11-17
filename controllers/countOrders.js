const { Orders } = require('../models/models');

const countOrders = async (req, res) => {
    Orders.count().then(count => {
        res.json({ result:count});

    })
    .catch(err => {
        console.log("Error when Counting Orders", err); 
        res.status(500).json({ message: 'Error when Counting Orders', error: err });
    })

}
module.exports = { countOrders }