'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
    name: 'Exemple',
    email: 'exemple@exemple.com',
    password_hash: await bcrypt.hash('exemple1', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
