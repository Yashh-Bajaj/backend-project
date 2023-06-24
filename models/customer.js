const Sequelize = require('sequelize')
const sequelize = require('../config/database')


const Customer = sequelize.define('customer', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = Customer;
