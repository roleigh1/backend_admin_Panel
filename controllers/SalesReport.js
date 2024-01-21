const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Orders } = require('../models/models');
const getTotalPrice = async (req,res) => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2222-01-31');
    try {
        const sumTotal = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const totalSum = sumTotal.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json({totalSum}); 
 
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ error: 'An error occurred' });
    }
}
const getTotalJan = async (res) => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-31');
    try {
        const sumJan = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const jan = sumJan.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(jan); 
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalFeb = async (res) => {
    const startDate = new Date('2023-02-01');
    const endDate = new Date('2023-02-28');
    try {
        const sumFeb = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const feb = sumFeb.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(feb)
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalMar = async (res) => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-03-31');
    try {
        const sumMar = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })

        const mar = sumMar.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(mar)
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalApr = async (res) => {
    const startDate = new Date('2023-04-01');
    const endDate = new Date('2023-04-30');
    try {
        const sumApr = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const apr = sumApr.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(apr);
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalMay = async (res) => {
    const startDate = new Date('2023-05-01');
    const endDate = new Date('2023-05-31');
    try {
        const sumMay = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const may = sumMay.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(may);
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalJune = async (res) => {
    const startDate = new Date('2023-06-01');
    const endDate = new Date('2023-06-30');
    try {
        const sumJun = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const jun = sumJun.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(jun)
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalJuly = async (res) => {
    const startDate = new Date('2023-07-01');
    const endDate = new Date('2023-07-31');
    try {
        const sumJul = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
       const jul = sumJul.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(jul); 
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalAug = async (res) => {
    const startDate = new Date('2023-08-01');
    const endDate = new Date('2023-08-31');
    try {
        const sumAug = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const aug = sumAug.reduce((a, b) => {
            return a + b.total;
        }, 0)
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalSep = async (res) => {
    const startDate = new Date('2023-09-01');
    const endDate = new Date('2023-09-30');
    try {
        const sumSep = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })

        const sep = sumSep.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(sep)
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalOct = async (res) => {
    const startDate = new Date('2023-10-01');
    const endDate = new Date('2023-10-31');
    try {
        const sumOct = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
       const oct = sumOct.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(oct); 
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalNov = async (res) => {
    const startDate = new Date('2023-11-01');
    const endDate = new Date('2023-11-30');
    try {
        const sumNov = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })
        const nov = sumNov.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(nov)
    } catch (error) {
        console.error('Error: ', error);
    }
}
const getTotalDec = async (res) => {
    const startDate = new Date('2023-12-01');
    const endDate = new Date('2023-12-31');
    try {
        const sumDec = await Orders.findAll({
            attributes: ['total'],
            where: {
                createdAt: {
                    [Op.between]: [startDate, endDate]
                },
            },
        })

        const dec = sumDec.reduce((a, b) => {
            return a + b.total;
        }, 0)
        res.json(dec)
    } catch (error) {
        console.error('Error: ', error);
    }
}

module.exports = {
    getTotalPrice, getTotalJan, getTotalApr, getTotalAug,
    getTotalDec, getTotalFeb, getTotalJuly, getTotalJune,
    getTotalMar, getTotalMay, getTotalNov, getTotalSep, getTotalOct
}