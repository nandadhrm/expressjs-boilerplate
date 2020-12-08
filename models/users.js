module.exports = function (Sequelize, DataTypes) {

    var Model = Sequelize.define('users', {
        user_id: {
            type: DataTypes.STRING,
            field: 'user_id',
            primaryKey: true,
            allowNull: false,
        },
        fullname: { type: DataTypes.STRING, allowNull: true },
        email: { type: DataTypes.STRING, allowNull: true },
        mobile: { type: DataTypes.STRING, allowNull: true },
        salt: { type: DataTypes.STRING, allowNull: true },
        password: { type: DataTypes.STRING, allowNull: true },
        is_active: { type: DataTypes.BOOLEAN, allowNull: true },
    }, { timestamps: false, freezeTableName: true });

    return Model;

};
