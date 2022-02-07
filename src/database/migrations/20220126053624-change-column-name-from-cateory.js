'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn('categories', 'name', {
    type: Sequelize.STRING,
    unique: true,
  }),
  down: async () => {},
};
