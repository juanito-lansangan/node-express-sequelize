'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable(
      'users_information',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        middle_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false
        },
      }
    );

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users_information');
  }
};
