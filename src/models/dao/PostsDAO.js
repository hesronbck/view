const Post = require('../Post');

let posts = [
  new Post({ id: 1, title: 'Primeiro Post', likes: 0 }),
  new Post({ id: 2, title: 'Segundo Post', likes: 0 }),
  // Adicione outros posts aqui
];

class PostsDAO {
  listar() {
    return posts;
  }

  criar(postData) {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const novoPost = new Post({ id, ...postData });
    posts.push(novoPost);
  }

  atualizarCurtidas(id, likes) {
    const post = posts.find(p => p.id === id);
    if (post) {
      post.likes = likes;
    }
  }
}

module.exports = new PostsDAO();
