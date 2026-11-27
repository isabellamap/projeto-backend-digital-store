const express = require('express');
const router = express.Router();

// Importa as rotas de produtos
const productRoutes = require('./productRoutes');

// Importa as rotas de categorias
const categoryRoutes = require('./categoryRoutes');

// Importa as rotas de usuários
const userRoutes = require('./userRoutes');

// Rotas principais da API
router.use('/v1/product', productRoutes);
router.use('/v1/category', categoryRoutes);
router.use('/v1/user', userRoutes);

module.exports = router;