'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberAccessAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MemberAccessAdmin.init({
    serviceMemberId: DataTypes.INTEGER,
    serviceAdminFeatureId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MemberAccessAdmin',
    tableName: 'memberAccessAdmin',
    timestamps: true
  });
  return MemberAccessAdmin;
};