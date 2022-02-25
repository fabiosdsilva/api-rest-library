'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    name: 'Example',
    email: 'example@example.com',
    password_hash: await bcrypt.hash('example1', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
