'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('books', 'inactive', {
    type: Sequelize.BOLLEAN,
    defaultValue: false,
  }),
  down: async (queryInterface) => queryInterface.removeColumn('books', 'inactive'),
};
