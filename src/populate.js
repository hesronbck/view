const db = require('./config/database');
const PostsDAO = require('./models/dao/PostsDAO');
const UsuarioDAO = require('./models/dao/UsuarioDAO');
const RespostasDAO = require('./models/dao/RespostaDAO');
const CurtidasDAO = require('./models/dao/CurtidaDAO');

// Sincronize os modelos com o banco de dados
db.sequelize.sync({ force: true }).then(async () => {

    console.log('Inserindo dados de exemplo.');

    // Criando 10 usuários
    await UsuarioDAO.create({
        nome: 'Usuário 1',
        email: 'usuario1@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 2',
        email: 'usuario2@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 3',
        email: 'usuario3@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 4',
        email: 'usuario4@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 5',
        email: 'usuario5@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 6',
        email: 'usuario6@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 7',
        email: 'usuario7@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 8',
        email: 'usuario8@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 9',
        email: 'usuario9@example.com',
        senha: 'senha123',
    });
    await UsuarioDAO.create({
        nome: 'Usuário 10',
        email: 'usuario10@example.com',
        senha: 'senha123',
    });

    // Criando 10 postagens
    await PostsDAO.create({
        idUsuario: 1,
        titulo: "Postagem 1",
        conteudo: "Conteúdo da postagem 1",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 2,
        titulo: "Postagem 2",
        conteudo: "Conteúdo da postagem 2",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 3,
        titulo: "Postagem 3",
        conteudo: "Conteúdo da postagem 3",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 4,
        titulo: "Postagem 4",
        conteudo: "Conteúdo da postagem 4",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 5,
        titulo: "Postagem 5",
        conteudo: "Conteúdo da postagem 5",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 6,
        titulo: "Postagem 6",
        conteudo: "Conteúdo da postagem 6",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 7,
        titulo: "Postagem 7",
        conteudo: "Conteúdo da postagem 7",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 8,
        titulo: "Postagem 8",
        conteudo: "Conteúdo da postagem 8",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 9,
        titulo: "Postagem 9",
        conteudo: "Conteúdo da postagem 9",
        dataHora: new Date(),
    });
    await PostsDAO.create({
        idUsuario: 10,
        titulo: "Postagem 10",
        conteudo: "Conteúdo da postagem 10",
        dataHora: new Date(),
    });

    // Criando 10 respostas
    await RespostasDAO.create({
        idUsuario: 1,
        idPostagem: 1,
        conteudo: "Conteúdo da resposta 1",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 2,
        idPostagem: 2,
        conteudo: "Conteúdo da resposta 2",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 3,
        idPostagem: 3,
        conteudo: "Conteúdo da resposta 3",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 4,
        idPostagem: 4,
        conteudo: "Conteúdo da resposta 4",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 5,
        idPostagem: 5,
        conteudo: "Conteúdo da resposta 5",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 6,
        idPostagem: 6,
        conteudo: "Conteúdo da resposta 6",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 7,
        idPostagem: 7,
        conteudo: "Conteúdo da resposta 7",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 8,
        idPostagem: 8,
        conteudo: "Conteúdo da resposta 8",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 9,
        idPostagem: 9,
        conteudo: "Conteúdo da resposta 9",
        dataHora: new Date(),
    });
    await RespostasDAO.create({
        idUsuario: 10,
        idPostagem: 10,
        conteudo: "Conteúdo da resposta 10",
        dataHora: new Date(),
    });

    // Criando 10 curtidas
    await CurtidasDAO.create({
        idUsuario: 1,
        idPostagem: 1,
    });
    await CurtidasDAO.create({
        idUsuario: 2,
        idPostagem: 2,
    });
    await CurtidasDAO.create({
        idUsuario: 3,
        idPostagem: 3,
    });
    await CurtidasDAO.create({
        idUsuario: 4,
        idPostagem: 4,
    });
    await CurtidasDAO.create({
        idUsuario: 5,
        idPostagem: 5,
    });
    await CurtidasDAO.create({
        idUsuario: 6,
        idPostagem: 6,
    });
    await CurtidasDAO.create({
        idUsuario: 7,
        idPostagem: 7,
    });
    await CurtidasDAO.create({
        idUsuario: 8,
        idPostagem: 8,
    });
    await CurtidasDAO.create({
        idUsuario: 9,
        idPostagem: 9,
    });
    await CurtidasDAO.create({
        idUsuario: 10,
        idPostagem: 10,
    });

    console.log('Dados de exemplo criados com sucesso.');
    process.exit(0);
});
