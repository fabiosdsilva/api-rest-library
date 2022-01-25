'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('books', 'category_id', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }),

  down: async (queryInterface) => queryInterface.removeColumn('books', 'category_id'),
};
