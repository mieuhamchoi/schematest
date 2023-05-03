'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceProvider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceProvider.init({
    name: DataTypes.STRING,
    des: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    stressAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    country: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    status: DataTypes.STRING,
    openAt: DataTypes.DATE,
    closeAt: DataTypes.DATE,
    serviceProviderSubscriptionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceProvider',
    tableName: 'serviceProvider',
    timestamps: true
  });
  return ServiceProvider;
};