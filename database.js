const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(process.env.DATABASE,process.env.USER_DATABASE,process.env.PASSWORD_DATABASE,{

     host: process.env.HOST_DATABASE,
     dialect: 'mysql'

});

module.exports = connection;