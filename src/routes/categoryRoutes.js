const express = require('express');
const router = express.Router();

// Importa as funções do controller
const CategoryController = require('../controllers/CategoryController');

// Importa o middleware de autenticação
const auth = require('../middlewares/auth');

// Rotas de categorias
router.post('/', auth, CategoryController.create);
router.get('/', CategoryController.list);
router.get('/:id', CategoryController.show);
router.put('/:id', auth, CategoryController.update);
router.delete('/:id', auth, CategoryController.remove);

module.exports = router;