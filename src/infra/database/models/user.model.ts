module.exports = (sequelize: any, DataTypes: any) => {
    const User = sequelize.define(
        "users",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(300),
            },
            username: {
                type: DataTypes.STRING(200),
            },
            email: {
                type: DataTypes.STRING(200),
            },
            address: {
                type: DataTypes.STRING(2000),
            },
            phone: {
                type: DataTypes.STRING(40),
            },
            website: {
                type: DataTypes.STRING(300),
            },
            company: {
                type: DataTypes.STRING(400),
            },
        },
        {
            timestamps: false,
            modelName: "users",
        },
    );
    User.associate = function (models) {
        User.hasMany(models.Post, {
            foreignKey: "userId",
            as: "posts",
        });
    };
    return User;
};
