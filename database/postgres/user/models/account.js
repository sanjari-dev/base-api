"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      account.hasMany(models.user_group, {
        foreignKey: "account_id"
      });
    }
  };
  account.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    name: DataTypes.STRING,
    profile: DataTypes.STRING,
    verified: DataTypes.INTEGER,
    otp: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: "account",
  });
  return account;
};