'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ServiceProviderLogs', [
        {
            serviceMemberId: 1,
            serviceAdminFeatureId: 1,
            des: 'xóa nhân viên a',
            time: new Date(),
            status: 'success',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            serviceMemberId: 1,
            serviceAdminFeatureId: 3,
            des: 'vừa truy cập quản lý hóa đơn',
            time: new Date(),
            status: 'success',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            serviceMemberId: 1,
            serviceAdminFeatureId: 2,
            des: 'vừa truy cập quản lý lịch sử',
            time: new Date(),
            status: 'success',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceProviderLogs', null, {});
  }
};
