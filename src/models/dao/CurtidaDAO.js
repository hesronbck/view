const Curtida = require('../Curtida'); // Importe o modelo da curtida

class CurtidaDAO {
    // Cria e persiste uma curtida
    async create({ idUsuario, idPostagem }) {
        let newCurtida;
        try {
            newCurtida = await Curtida.create({ idUsuario, idPostagem });
        } catch (error) {
            console.error('Erro ao criar curtida:', error);
        } finally {
            return newCurtida; // Retorne a curtida criada
        }
    }

    // Busca todas as curtidas do banco de dados
    async getAll() {
        let curtidas;
        try {
            curtidas = await Curtida.findAll();
        } catch (error) {
            console.error('Erro ao buscar curtidas:', error);
        } finally {
            return curtidas;
        }
    }

    // Implemente outros métodos de acordo com suas necessidades
}

module.exports = new CurtidaDAO();
