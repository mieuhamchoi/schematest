'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServicePermission.init({
    serviceMemberId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    accessDelete: DataTypes.BOOLEAN,
    accessCreate: DataTypes.BOOLEAN,
    accessUpdate: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'ServicePermission',
    tableName: 'ServicePermission',
    timestamps: true
  });
  return ServicePermission;
};