'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('photos', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    originalname: {
      type: Sequelize.STRING,
    },
    filename: {
      type: Sequelize.STRING,
    },
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'books', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('photos'),
};
