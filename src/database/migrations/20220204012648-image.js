'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('images', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    originalname: {
      type: Sequelize.STRING,
    },
    filename: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  }),
  down: async (queryInterface) => queryInterface.dropTable('images'),
};
