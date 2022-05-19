"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      notification.belongsTo(models.account, {
        foreignKey: "account_id"
      });
    }
  };
  notification.init({
    account_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    is_read: DataTypes.BIGINT,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    link_path: DataTypes.STRING,
    link_params: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "notification",
  });
  return notification;
};