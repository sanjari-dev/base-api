"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class menu_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      menu_item.belongsTo(models.menu, {
        foreignKey: "menu_id"
      });
      menu_item.belongsTo(models.master_menu, {
        foreignKey: "master_menu_id"
      });
    }
  };
  menu_item.init({
    menu_id: DataTypes.INTEGER,
    master_menu_id: DataTypes.INTEGER,
    parent_id: DataTypes.INTEGER,
    sequence: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: "menu_item",
  });
  return menu_item;
};