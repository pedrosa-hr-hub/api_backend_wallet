const Sequelize = require('sequelize');
const database = require('../database');

const Treasury = database.define('treasury',{
     id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
     },
     name:{
          type: Sequelize.STRING(50),
          allowNull: false
     },
     datebuy:{
          type: Sequelize.DATE,
          allowNull: false
     }
});

Treasury.sync({force: true});

module.exports = Treasury;