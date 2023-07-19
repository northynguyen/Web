'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product_Branch_Catalog extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product_Branch_Catalog.init({
        productID: DataTypes.INTEGER,
        branchID: DataTypes.INTEGER,
        catalogID: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Product_Branch_Catalog',
    });
    return Product_Branch_Catalog;
};