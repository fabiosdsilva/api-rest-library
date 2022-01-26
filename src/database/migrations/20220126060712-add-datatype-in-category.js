'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn('categories', 'id', {
    type: Sequelize.INTEGER,
    autoIncrement: true,
  }),
  down: async (queryInterface) => {},
};
