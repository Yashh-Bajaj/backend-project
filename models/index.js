
const sequelize = require('../config/database')
const Order = require('./order')
const Customer = require('./customer')

Customer.hasMany(Order);
Order.belongsTo(Customer);

const connectToDb = async()=>{
    try {
        await sequelize.sync({force:false})
        console.log('Connected');
    } catch (error) {
        console.log(error);
    }}





module.exports = {connectToDb}