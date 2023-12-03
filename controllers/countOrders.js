const { type } = require('os');
const { Op } = require('sequelize'); 
const { Orders } = require('../models/models');


let date = new Date();
let day = date.getDate();
let month = date.getMonth()
let year = date.getFullYear(); 
let dateToday = new Date(year, month, day);
console.log(dateToday); 
let dayOfWeek = dateToday.getDay(); 
let differenceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
let lastMonday = new Date(dateToday);
lastMonday.setDate(dateToday.getDate() + differenceToMonday); 


console.log(typeof lastMonday); 

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