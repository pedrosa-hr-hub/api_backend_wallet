const Sequelize = require('sequelize');
const database = require('../database');

const Fund = database.define('fund',{
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

Fund.sync({force: true});

module.exports = Fund;