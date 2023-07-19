'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Order.init({
        statusID: DataTypes.TEXT,//Tình trạng đơn hàng
        productID: DataTypes.INTEGER,
        clientID: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        address: DataTypes.STRING,
        dateOrder: DataTypes.DATE,
        timeType: DataTypes.STRING,
        payments: DataTypes.TEXT,
        note: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};