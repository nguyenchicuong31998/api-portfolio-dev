"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING(300),
            },
            username: {
                type: Sequelize.STRING(200),
            },
            email: {
                type: Sequelize.STRING(200),
            },
            address: {
                type: Sequelize.STRING(2000),
            },
            phone: {
                type: Sequelize.STRING(40),
            },
            website: {
                type: Sequelize.STRING(300),
            },
            company: {
                type: Sequelize.STRING(400),
            },

            // createdAt: {
            //     type: Sequelize.DATE,
            //     defaultValue: new Date(),
            //     field: "created_date",
            // },

            // updatedAt: {
            //     type: Sequelize.DATE,
            //     defaultValue: new Date(),
            //     field: "last_modified_date",
            // },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users");
    },
};
