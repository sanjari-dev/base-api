"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      activity.belongsTo(models.account, {
        foreignKey: "account_id"
      });
    }
  };
  activity.init({
    account_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.BIGINT,
    type: DataTypes.STRING,
    data: DataTypes.TEXT,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "activity",
  });
  return activity;
};