"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      group.hasMany(models.user_group, {
        foreignKey: "group_id"
      });
    }
  };
  group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    by: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: "group",
  });
  return group;
};