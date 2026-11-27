const express = require('express');

// Importa as rotas que criamos
const routes = require('./routes');

// Cria a aplicação
const app = express();

// Permite receber dados em JSON
app.use(express.json());

// Utiliza as rotas da nossa API
app.use('/', routes);

// Exporta a aplicação
module.exports = app;

