const { Sequelize } = require('sequelize');
const  sequelize  = new Sequelize('todo_list', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});