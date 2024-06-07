const Resposta = require('../Resposta'); // Importe o modelo da resposta

class RespostaDAO {
    // Cria e persiste uma resposta
    async create({ idUsuario, idPostagem, conteudo, dataHora }) {
        let newResposta;
        try {
            newResposta = await Resposta.create({ idUsuario, idPostagem, conteudo, dataHora });
        } catch (error) {
            console.error('Erro ao criar resposta:', error);
        } finally {
            return newResposta; // Retorne a resposta criada
        }
    }

    // Busca todas as respostas do banco de dados
    async getAll() {
        let respostas;
        try {
            respostas = await Resposta.findAll();
        } catch (error) {
            console.error('Erro ao buscar respostas:', error);
        } finally {
            return respostas;
        }
    }

    // Implemente outros métodos de acordo com suas necessidades
}

module.exports = new RespostaDAO();
