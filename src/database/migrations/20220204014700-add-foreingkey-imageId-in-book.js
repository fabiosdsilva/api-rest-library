'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('books', 'image_id', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: { model: 'images', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }),

  down: async (queryInterface) => queryInterface.removeColumn('books', 'imageId'),
};
