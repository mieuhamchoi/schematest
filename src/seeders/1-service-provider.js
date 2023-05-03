'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ServiceProviders', [{
      name: 'Phở Hà Nội Quán',
      des: 'phở truyền thống hà nội xưa, thơm ngon,...',
      userId: 1,
      stressAddress: 'Phạm Thị Tánh',
      city: 'Hồ Chí Minh',
      zipCode: 800780,
      country: 'Việt Nam',
      latitude: 14.532,
      longitude: 25.64452,
      status: 'active',
      openAt: new Date(),
      closeAt: new Date(),
      serviceProviderSubscriptionId: 123,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceProviders', null, {});
  }
};
