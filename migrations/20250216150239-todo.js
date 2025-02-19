'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('Todos', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        task:{
          allowNull: false,
          type: Sequelize.STRING,
        },
        status:{
          allowNull: false,
          type: Sequelize.STRING
        },
        action:{
          allowNull: false,
          type: Sequelize.STRING
        },

        });
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('todos');
     
  }
};
