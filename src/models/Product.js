const { DataTypes } = require('sequelize');
const database = require('../config/database');

// Cria a tabela de produtos
const Product = database.define('Product', {
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price_with_discount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'products'
});

module.exports = Product;
