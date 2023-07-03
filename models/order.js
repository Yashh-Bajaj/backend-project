const Sequelize = require('sequelize')
const sequelize = require('../config/database')


const Order = sequelize.define('order',{
    orderDate:{
        type:Sequelize.DATEONLY,
        allowNull:true,
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
    count:{
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
    }
});

module.exports = Order