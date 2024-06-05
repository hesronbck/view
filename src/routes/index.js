const express = require('express');
const router = express.Router();

// Simulação de banco de dados
let posts = [
  { id: 1, titulo: 'Primeiro Post', conteudo: 'Conteúdo do primeiro post', likes: 0 }
];

// Página principal
router.get('/', (req, res) => {
  res.render('index', { posts });
});

// Página de login
router.get('/login', (req, res) => {
  res.render('login');
});

// Página de registro
router.get('/register', (req, res) => {
  res.render('register');
});

// Criação de posts
router.post('/posts', (req, res) => {
  const { titulo, conteudo } = req.body;
  const newPost = {
    id: posts.length + 1,
    titulo,
    conteudo,
    likes: 0
  };
  posts.push(newPost);
  res.redirect('/');
});

module.exports = router;
