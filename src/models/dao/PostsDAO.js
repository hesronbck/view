const Post = require('../Post');

let posts = [
  new Post({ id: 1, title: 'Primeiro Post', content: 'Este é o primeiro post', likes: 0 }),
  new Post({ id: 2, title: 'Segundo Post', content: 'Este é o segundo post', likes: 0 }),
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
}

module.exports = new PostsDAO();
