const Sequelize = require('sequelize')
const sequelize = require('../config/database')


const Order = sequelize.define('order',{
    orderDate:{
        type:Sequelize.DATEONLY,
        allowNull:true,
    },
    customer:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    company:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    owner:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    item:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    weight:{
        type:Sequelize.FLOAT,
        allowNull:false,
    },
    requestforshipment:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    trackid:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    shipmentsize:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    boxcount:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    specification:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    checklistquantity:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
});

module.exports = Order