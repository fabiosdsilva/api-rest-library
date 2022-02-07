'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('books', 'active', {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  }),
  down: async (queryInterface) => queryInterface.removeColumn('books', 'active'),
};
