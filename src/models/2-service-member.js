'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceMember.init({
    serviceProviderId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    firstLogin: DataTypes.BOOLEAN,
    lastLoginAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ServiceMember',
    tableName: 'serviceMember',
    timestamps: true
  });
  return ServiceMembers;
};