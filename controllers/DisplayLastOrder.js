const { get } = require('http');
const {Orders} = require('../models/models');

const getlastOrder = async (req,res) => {
   try{
    const lastRecord = await Orders.findOne({
        order:[['id','DESC']],
    });

    if(lastRecord) {
        console.log('The Last Order', lastRecord.toJSON()); 

    } else {
        console.log("Table is empty"); 
    }
} catch (error) {
    console.error('Fehler:', error);
} 
 } 
 getlastOrder(); 
module.exports = getlastOrder