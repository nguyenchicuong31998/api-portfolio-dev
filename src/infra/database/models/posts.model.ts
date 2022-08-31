module.exports = (sequelize: any, DataTypes: any) => {
    const Posts = sequelize.define(
        "posts",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            title: {
                type: DataTypes.STRING,
            },
            body: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
            modelName: "posts",
        },
    );
    Posts.associate = function (models) {
        Posts.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });

        Posts.hasMany(models.Comment, {
            foreignKey: "postId",
            as: "comments",
        });
    };
    return Posts;
};
