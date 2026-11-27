require('dotenv').config();

// Importa o Sequelize
const { Sequelize } = require('sequelize');

// Configura a conexão com o banco de dados
const database = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

// Exporta a conexão
module.exports = database;

