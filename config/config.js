// Carrega as variáveis do arquivo .env
require('dotenv').config();

module.exports = {
    // Configuração do banco principal
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    },

    // Configuração do banco de testes
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'projeto_backend_teste',
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    },

    // Configuração de produção
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
};