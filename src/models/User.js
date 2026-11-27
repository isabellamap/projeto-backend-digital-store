const { DataTypes } = require('sequelize');
const database = require('../config/database');

// Cria a tabela de usuários
const User = database.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'users'
});

module.exports = User;
