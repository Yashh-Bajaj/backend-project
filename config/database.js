const Sequelize = require('sequelize');

const sequelize = new Sequelize('sql12629318', 'sql12629318', 'YlDGnNj79z', {
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql',
 
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize