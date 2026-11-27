const { DataTypes } = require('sequelize');
const database = require('../config/database');

// Cria a tabela que relaciona produtos e categorias
const ProductCategory = database.define('ProductCategory', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: 'product_categories'
});

module.exports = ProductCategory;
