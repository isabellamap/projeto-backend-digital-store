const express = require('express');
const router = express.Router();

// Importa as funções do controller
const UserController = require('../controllers/UserController');

// Rotas de usuários
router.post('/', UserController.create);
router.post('/login', UserController.login);

module.exports = router;