'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceProviderLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceProviderLog.init({
    serviceMemberId: DataTypes.INTEGER,
    serviceAdminFeatureId: DataTypes.INTEGER,
    des: DataTypes.STRING,
    time: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ServiceProviderLog',
    tableName: 'serviceProviderLog',
    timestamps: true
  });
  return ServiceProviderLog;
};