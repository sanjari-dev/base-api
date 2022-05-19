"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class user_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_permission.init({
    account_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "user_permission",
  });
  return user_permission;
};