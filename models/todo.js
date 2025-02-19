'use strict';

const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    console.log("Into Todo model");
    const Todo = sequelize.define('Todos', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Todo;
};
