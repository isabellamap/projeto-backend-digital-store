const { DataTypes } = require('sequelize');
const database = require('../config/database');

// Cria a tabela de imagens dos produtos
const ProductImage = database.define('ProductImage', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: 'product_images'
});

module.exports = ProductImage;
