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
  account.add = async (data) => {

    // last account
    const last = await account.findOne({
      order: [
        ['id', 'DESC']
      ],
      paranoid: false
    });

    // set account id
    data.id = last ? last.id + 1 : 1;
    data.password = sans.helpers.sha(`${data.id}-${data.password}`);

    // create data account
    const dataCreate = await account.create(data);

    return dataCreate
  }
  return account;
};