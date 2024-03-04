const { type } = require('os');
const { Op } = require('sequelize'); 
const { Orders } = require('../models/models');

const moment = require("moment");
function getLastMonday(){
    let today = moment(); 
    let dayOfWeek = today.day(); 

    let distanceToLastMonday = dayOfWeek === 0 ? 6 : dayOfWeek-1
    let lastmonday = today.subtract(distanceToLastMonday ,'days'); 
    return lastmonday.format('YYYY-MM-DD'); 

}

let lastMonday = getLastMonday(); 

console.log(lastMonday);
const countCreatedAt = async (lastMonday,res) => {
 const ordersCount = await Orders.count({
        where: {
            createdAt: {
                [Op.gte]: lastMonday
            }
        }                                     
 })
    res.json({ CountCreatedAt: ordersCount });
    console.log(ordersCount);
}


const countOrders = async (req, res) => {
    Orders.count().then(count => {
        res.json({ result:count});

    })
    .catch(err => {
        console.log("Error when Counting Orders", err); 
        res.status(500).json({ message: 'Error when Counting Orders', error: err });
    })

}
module.exports = { countOrders, countCreatedAt }