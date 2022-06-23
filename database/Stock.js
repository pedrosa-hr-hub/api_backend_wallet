const Sequelize = require('sequelize');
const database = require('../database');

const Stock = database.define('stock',{
     id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
     },
     ticker:{
          type: Sequelize.STRING(7),
          allowNull: false
     },
     price:{
          type:Sequelize.DECIMAL(20,2),
          allowNull: false
     },
     quanty:{
          type: Sequelize.INTEGER,
          allowNull: false
     },
     datebuy:{
          type: Sequelize.DATE,
          allowNull: false
     }
});

Stock.sync({force: true});

module.exports = Stock;