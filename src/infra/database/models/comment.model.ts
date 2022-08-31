module.exports = (sequelize: any, DataTypes: any) => {
    const Comment = sequelize.define(
        "comments",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            postId: {
                type: DataTypes.STRING(300),
                allowNull: true,
            },
            name: {
                type: DataTypes.STRING(200),
            },
            email: {
                type: DataTypes.STRING(200),
            },
            body: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
            modelName: "comments",
        },
    );
    Comment.associate = function (models) {
        Comment.belongsTo(models.Post, {
            foreignKey: "postId",
            as: "posts",
        });
    };
    return Comment;
};
