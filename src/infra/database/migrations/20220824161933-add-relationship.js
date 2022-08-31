module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    "posts", // name of Source model
                    "userId", // name of the key we're adding
                    {
                        type: Sequelize.INTEGER,
                        allowNull: true,
                        references: {
                            model: "users", // name of Target model
                            key: "id", // key in Target model that we're referencing
                        },
                        onUpdate: "CASCADE",
                        // onDelete: "CASCADE",
                    },
                    {
                        transaction: t,
                    },
                ),
                queryInterface.addColumn(
                    "comments", // name of Source model
                    "postId", // name of the key we're adding
                    {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        references: {
                            model: "posts", // name of Target model
                            key: "id", // key in Target model that we're referencing
                        },
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                        // onDelete: "SET NULL",
                    },
                    {
                        transaction: t,
                    },
                ),
            ]);
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn(
                    "posts", // name of Source model
                    "userId",
                    { transaction: t }, // key we want to remove
                ),
                queryInterface.removeColumn(
                    "comments", // name of Source model
                    "postId",
                    { transaction: t }, // key we want to remove
                ),
            ]);
        });
    },
};
