const { Router } = require('express');
const router = new Router();
const postsRoutes = require('./posts');

router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.use('/posts', postsRoutes);

module.exports = router;
