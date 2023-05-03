'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ServiceMembers', [{
      serviceProviderId: 1,
      name: 'Phước',
      userName: 'phuocnguyen',
      password: "1233456aA@",
      firstLogin: true,
      lastLoginAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceMembers', null, {});
  }
};
