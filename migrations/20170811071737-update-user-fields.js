'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'username',
      {
        type: 'VARCHAR(20)',
        allowNull: false
      },
    );

    queryInterface.changeColumn(
      'users',
      'is_active',
      {
        type: 'VARCHAR(1)',
        allowNull: false,
        defaultValue: 'A',
      },
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
