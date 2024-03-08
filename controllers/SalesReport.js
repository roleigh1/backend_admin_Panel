const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Orders } = require('../models/models');






const getTotalMonth = async (req, res) => {
    try {
      const month = req.params.month.toLowerCase();
      const { startDate, endDate } = getMonthDateRange(month);
  
      const sumResult = await Orders.findAll({
        attributes: ['total'],
        where: {
          createdAt: {
            [Op.between]: [startDate, endDate],
          },
        },
      });
  
      const monthTotal = sumResult.reduce((a, b) => a + b.total, 0);
  
      res.json({ [month]: monthTotal });
    } catch (error) {
      console.error(`Error fetching ${month}`, error);
      res.status(500).json({ error: `Error fetching ${month}` });
    }
  };
  
  const getMonthDateRange = (month) => {
    const year = 2023; // 
    const monthMap = {
      jan: 1,
      feb: 2,
      mar: 3,
      apr: 4,
      may: 5,
      jun: 6,
      jul: 7,
      aug: 8,
      sep: 9,
      oct: 10,
      nov: 11,
      dec: 12,
    };
  
    const startOfMonth = new Date(year, monthMap[month] - 1, 1);
    const endOfMonth = new Date(year, monthMap[month], 0);
  
    return {
      startDate: startOfMonth,
      endDate: endOfMonth,
    };
  };

module.exports = {
    getTotalMonth
}