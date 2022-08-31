("use strict");
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("comments", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            // postId: {
            //     type: Sequelize.STRING(300),
            //     allowNull: true,
            // },
            name: {
                type: Sequelize.STRING(200),
            },
            email: {
                type: Sequelize.STRING(200),
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
        await queryInterface.dropTable("comments");
    },
};
