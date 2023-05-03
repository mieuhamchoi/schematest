'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServicePermissions', {
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
      serviceId: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'Services',
            },
            key: 'id'
        },
      },
      accessDelete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      accessCreate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      accessUpdate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('ServicePermissions');
  }
};