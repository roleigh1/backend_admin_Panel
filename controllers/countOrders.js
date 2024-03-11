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
const countOperation = async (lastMonday,res) => {
try{
    const ordersCountLastMonday = await Orders.count({
        where: {
            createdAt: {
                [Op.gte]: lastMonday
            }
        }                                     
 })
 const countOrder = await Orders.count() ;

 const counterOp= {
    ordersCountLastMonday,
    countOrder
 }
 res.json({counterOp})
} catch (error) {
    console.error("Error Counting ", error ); 
    res.status(400).json({message: error }); 
}
 
}



module.exports = { countOperation }