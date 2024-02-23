
const { Sequelize, DataTypes } = require("sequelize");



const sequelize = new Sequelize(process.env.MYSQL_DATABASE,process.env.MYSQL_USER,process.env.MYSQL_PASSWORD, {
    host: "localhost",
    dialect: 'mysql',
    logging:false,
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
const ProductsDB = sequelize.define("Product", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName:"products",
    timestamps:"true"
}); 
const BestSellerItemsDB = sequelize.define("Item",{
    name: {
        type: DataTypes.STRING, 
        allowNull:false,
    },
    price:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName:"items",
    timestamps:true
}); 

const User = sequelize.define('Admin', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
},
    {
        tableName: 'admin',
        timestamps: false
    });

const Orders = sequelize.define("Orders", {
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    item: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },

    total: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },

    pickupdate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },

    location: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },

    createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },
 }, {
        tableName: 'orders',
        timestamps: false
    });

module.exports = { User,Orders,ProductsDB,BestSellerItemsDB ,sequelize };