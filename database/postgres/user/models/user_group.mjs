"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class user_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_group.belongsTo(models.account, {
        foreignKey: "account_id"
      });
      user_group.belongsTo(models.group, {
        foreignKey: "group_id"
      });
    }
  };
  user_group.init({
    account_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    is_default: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: "user_group",
  });
  user_group.get = async (params) => {
    params.include = [
      sequelize.models.account,
      sequelize.models.group
    ];
    let data = await user_group.findAll(params);
    return data;
  };
  return user_group;
};