
const { Sequelize, DataTypes } = require("sequelize");



const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});
async function authDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}
authDb();


const User = sequelize.define('Admin', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
    }
}, 
{
    tableName:'admin',
    timestamps: false
});

module.exports = {User};