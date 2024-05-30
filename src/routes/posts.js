const express = require('express');
const router = express.Router();
const postsController = require('../controllers/PostsController');

// Listar todos os posts
router.get('/', postsController.index);

// Formulário de criação de post
router.get('/create', postsController.formCreate);

// Criar um novo post
router.post('/', postsController.create);

// Atualizar curtidas
router.post('/:id/like', postsController.atualizarCurtidas);

module.exports = router;
