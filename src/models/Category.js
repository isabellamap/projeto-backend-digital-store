const { DataTypes } = require('sequelize');
const database = require('../config/database');

// Cria a tabela de categorias
const Category = database.define('Category', {
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
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'categories'
});

module.exports = Category;
