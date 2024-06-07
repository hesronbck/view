const Postagem = require('../Postagem'); // Importe o modelo da postagem

class PostagemDAO {
    // Cria e persiste uma postagem
    async create({ idUsuario, titulo, conteudo, dataHora }) {
        let newPostagem;
        try {
            newPostagem = await Postagem.create({ idUsuario, titulo, conteudo, dataHora });
        } catch (error) {
            console.error('Erro ao criar postagem:', error);
        } finally {
            return newPostagem; // Retorne a postagem criada
        }
    }

    // Busca todas as postagens do banco de dados
    async getAll() {
        let postagens;
        try {
            postagens = await Postagem.findAll();
        } catch (error) {
            console.error('Erro ao buscar postagens:', error);
        } finally {
            return postagens;
        }
    }

    // Implemente outros métodos de acordo com suas necessidades
}

module.exports = new PostagemDAO();
