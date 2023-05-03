'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MemberAccessAdmins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceMemberId: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'ServiceMembers',
            },
            key: 'id'
        },
      },
      serviceAdminFeatureId: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'ServiceAdminFeatures',
            },
            key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MemberAccessAdmins');
  }
};