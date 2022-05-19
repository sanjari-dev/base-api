"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      menu.hasMany(models.account, {
        foreignKey: "menu_id"
      });
      menu.hasMany(models.menu_item, {
        foreignKey: "menu_id"
      });
    }
  };
  menu.init({
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "menu",
  });
  return menu;
};