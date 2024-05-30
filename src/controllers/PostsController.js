const PostsDAO = require('../models/dao/PostsDAO');

class PostsController {
  index(req, res) {
    const posts = PostsDAO.listar();
    res.render('posts/index', { posts });
  }

  formCreate(req, res) {
    res.render('posts/create');
  }

  create(req, res) {
    const { title, content } = req.body;
    PostsDAO.criar({ title, content, likes: 0 });
    res.redirect('/posts');
  }

  atualizarCurtidas(req, res) {
    const { id } = req.params;
    const { likes } = req.body;
    PostsDAO.atualizarCurtidas(parseInt(id), parseInt(likes));
    res.status(200).send();
  }
}

module.exports = new PostsController();
