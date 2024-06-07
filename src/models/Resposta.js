// Importando as dependências necessárias
const db = require('../config/database');
const { Model, DataTypes } = require('sequelize');

// Definindo a classe Resposta que estende Model do Sequelize
class Resposta extends Model {
    // Aqui devem vir os métodos que essa classe pode executar

    // Associação com a classe Postagem
    static associate(models) {
        this.belongsTo(models.Postagem, { foreignKey: 'idPostagem', as: 'postagem' });
        this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
    }
}

// Inicializando a classe Resposta com o esquema do banco de dados
Resposta.init({
    // Conteúdo não pode ser null
    conteudo: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize: db.sequelize, // Conexão com o banco de dados
    modelName: 'Resposta', // Nome do modelo
    tableName: 'respostas', // Nome da tabela no banco de dados
});

// Exportando a classe Resposta
module.exports = Resposta;
