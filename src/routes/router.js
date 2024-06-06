const { Router } = require('express');
const router = new Router();
const postsRoutes = require('./posts');

router.get('/login', (req, res) => {
  res.render('login');
});

// Rota para processar o login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Implementar a lógica de autenticação aqui
  // Para este exemplo, vamos apenas redirecionar para a página inicial
  if (username === 'admin' && password === 'password') {
    res.redirect('/');
  } else {
    res.status(401).send('Usuário ou senha incorretos');
  }
});

router.get('/', (req, res) => {
  res.redirect('/posts');
});

// Rota para exibir a página de cadastro
router.get('/register', (req, res) => {
  res.render('register');
});

// Rota para processar o cadastro
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Implementar a lógica de cadastro aqui
  // Para este exemplo, vamos apenas redirecionar para a página de login
  // Após salvar o novo usuário no banco de dados

  // Exemplo de lógica de armazenamento - substituir pelo código real
  const newUser = { username, password };
  // users.push(newUser); // Supondo que users é um array armazenando os usuários

  res.redirect('/login');
});

router.post('/posts/create', (req, res) => {
  const { title, content } = req.body;

  // Código para criar o post no banco de dados
  const newPost = {
    id: generateNewId(), // Função para gerar um novo ID
    title: title,
    content: content,
    likes: 0
  };

  // Suponha que posts seja um array que armazena os posts
  router.push(newPost);

  // Retornar os dados do novo post
  res.status(201).json(newPost);
});

router.use('/posts', postsRoutes);


module.exports = router;

