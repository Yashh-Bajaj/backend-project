const Sequelize = require('sequelize')

const sequelize = new Sequelize('prac-backend','root','yash.bajaj24',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize