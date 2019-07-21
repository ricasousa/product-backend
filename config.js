const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('nodeApp', 'node-app', 'node-app', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;

// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:node-app@node-app/dbname');
