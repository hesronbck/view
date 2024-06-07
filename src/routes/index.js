const express = require('express');
const router = express.Router();

let posts = [
  { id: 1, titulo: 'Primeiro Post', conteudo: 'Conteúdo do primeiro post', likes: 0 },
  { id: 2, titulo: 'Segundo Post', conteudo: 'Conteúdo do segundo post', likes: 0 }
];

// Rota para exibir posts
router.get('/posts', (req, res) => {
  res.render('home', { posts });
});

// Rota para criar um novo post
router.post('/posts/create', (req, res) => {
  const { titulo, conteudo } = req.body;
  const newPost = { id: posts.length + 1, titulo, conteudo, likes: 0 };
  posts.push(newPost);
  res.json(newPost);
});

module.exports = router;
