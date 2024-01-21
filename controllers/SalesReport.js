const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Orders } = require('../models/models');


const getTotalPricePerJan = async( res)=> {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2024-01-31'); 
try {
    const sumJanuary =  await Orders.findAll({
        attributes:['total'],
        where:{
            createdAt: {
                [Op.between]: [startDate,endDate]
            },
        },
})
   
   return sumJanuary.reduce((a,b)=>{
        return a + b.total; 
    },0)


} catch(error) {
    console.error('Error: ', error);
}

   
    
}
module.exports = {getTotalPricePerJan}