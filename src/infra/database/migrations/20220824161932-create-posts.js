"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("posts", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            // userId: {
            //     type: Sequelize.INTEGER,
            //     allowNull: true,
            // },
            title: {
                type: Sequelize.STRING,
            },
            body: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("posts");
    },
};
