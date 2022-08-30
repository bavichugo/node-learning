const Sequelize = require('sequelize');

// Add password on ########
const sequelize = new Sequelize('node-complete', 'root', '########', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
