const Sequelize = require('sequelize');
const database = require('../database');

const Stock = database.define('stock',{
     ticker:{

     },
     price:{

     },
     quanty:{
     
     },
     datebuy:{
          
     }
})