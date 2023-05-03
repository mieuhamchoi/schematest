'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MemberAccessAdmins', [
        {
            serviceMemberId: 1,
            serviceAdminFeatureId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            serviceMemberId: 1,
            serviceAdminFeatureId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            serviceMemberId: 1,
            serviceAdminFeatureId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MemberAccessAdmins', null, {});
  }
};
