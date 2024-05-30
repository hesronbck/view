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
}

module.exports = new PostsController();
