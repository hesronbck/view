// Importando as dependências necessárias
const db = require('../config/database');
const { Model, DataTypes } = require('sequelize');

// Definindo a classe Curtida que estende Model do Sequelize
class Curtida extends Model {
    // Aqui devem vir os métodos que essa classe pode executar

    // Associação com a classe Usuario e Post
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
        this.belongsTo(models.Post, { foreignKey: 'idPostagem', as: 'postagem' });
    }
}

// Inicializando a classe Curtida com o esquema do banco de dados
Curtida.init({}, {
    sequelize: db.sequelize, // Conexão com o banco de dados
    modelName: 'Curtida', // Nome do modelo
    tableName: 'curtidas', // Nome da tabela no banco de dados
});

// Exportando a classe Curtida
module.exports = Curtida;
