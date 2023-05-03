'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ServiceAdminFeatures', [
        {
            name: 'Quản Lý Nhân Viên',
            des: 'tính năng cho phép chủ nhà hàng quản lý nhân viên của mình,...',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Quản Lý Lịch Sử',
            des: 'tính năng cho phép chủ nhà hàng quản lý mọi hành động xảy ra tại trang admins của nhà hàng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Quản Lý Hóa Đơn',
            des: 'tính năng cho phép chủ nhà hàng quản lý hóa đơn của nhà hàng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Quản Lý Lịch Sử aasdas',
            des: 'tính năng cho phép chủ nhà hàng quản lý mọi hành động xảy ra tại trang admins của nhà hàng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Quản Lý Lịch Sử cxzczxc',
            des: 'tính năng cho phép chủ nhà hàng quản lý mọi hành động xảy ra tại trang admins của nhà hàng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Quản Lý Lịch Sử aa541212',
            des: 'tính năng cho phép chủ nhà hàng quản lý mọi hành động xảy ra tại trang admins của nhà hàng',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ServiceAdminFeatures', null, {});
  }
};
