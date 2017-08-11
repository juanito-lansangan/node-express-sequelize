'use strict';
var chance = require('chance').Chance();
const User = require('../models/User');

module.exports = {
  up: function (queryInterface, Sequelize) {
    User.findAll()
      .then(users => {
        var usersInfo = [];
        for(let user of users) {
          user = user.get({plain: true});
          var userInfo = {
            user_id: user.id,
            first_name: user.username,
            middle_name: chance.last(),
            last_name: chance.last(),
            address: chance.address()
          };
          usersInfo.push(userInfo);
        }

        return queryInterface.bulkInsert('users_information', usersInfo);
      })
      .catch(error => console.error(error));
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users_information', null, {});
  }
};
