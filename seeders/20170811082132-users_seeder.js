'use strict';
var bcrypt = require('bcrypt');
var chance = require('chance').Chance();

const rounds = 10;
const someOtherPlaintextPassword = 'encrypt_me';

module.exports = {
  up: function (queryInterface, Sequelize) {
      var users = [];
      for(var i = 1; i <= rounds; i++) {
        var firstname = chance.first();
        var user = {
          id: i,
          username: firstname.toLowerCase(),
          password: bcrypt.hashSync('123456', rounds),
          user_type: 'N'
        };
        users.push(user);
      }

    return queryInterface.bulkInsert('users', users);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
