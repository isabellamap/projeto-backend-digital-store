const express = require('express');
const router = express.Router();

// Importa as funções do controller
const ProductController = require('../controllers/ProductController');

// Importa o middleware de autenticação
const auth = require('../middlewares/auth');

// Rotas de produtos
router.post('/', auth, ProductController.create);
router.get('/', ProductController.list);
router.get('/search', ProductController.search);

// Rotas de imagens
router.post('/:id/images', auth, ProductController.createImage);
router.delete('/:id/images/:imageId', auth, ProductController.removeImage);

// Rotas de opções dos produtos
router.post('/:id/options', auth, ProductController.createOption);
router.delete('/:id/options/:optionId', auth, ProductController.removeOption);

// Rotas de produto por ID
router.get('/:id', ProductController.show);
router.put('/:id', auth, ProductController.update);
router.delete('/:id', auth, ProductController.remove);

module.exports = router;
