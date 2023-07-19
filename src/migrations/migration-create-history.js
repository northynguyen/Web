'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Historys', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            clientID: {
                type: Sequelize.INTEGER
            },
            orderID: {
                type: Sequelize.INTEGER
            },
            statusID: {
                type: Sequelize.TEXT
            },
            dateOrder: {
                type: Sequelize.DATE
            },
            files: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Historys');
    }
};