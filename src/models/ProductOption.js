const { DataTypes } = require('sequelize');
const database = require('../config/database');

// Cria a tabela de opções dos produtos
const ProductOption = database.define('ProductOption', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shape: {
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square'
    },
    radius: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM('text', 'color'),
        defaultValue: 'text'
    },
    values: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: 'product_options'
});

module.exports = ProductOption;
