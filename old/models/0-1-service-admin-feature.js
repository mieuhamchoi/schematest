'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceAdminFeature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceAdminFeature.init({
    name: DataTypes.STRING,
    des: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ServiceAdminFeature',
    tableName: 'serviceAdminFeature',
    timestamps: true
  });
  return ServiceAdminFeature;
};