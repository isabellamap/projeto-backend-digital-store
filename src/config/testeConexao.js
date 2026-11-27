const database = require('./database');

// Testa a conexão com o MySQL
async function testarConexao() {
    try {
        await database.authenticate();
        console.log('Conexão com o banco de dados realizada com sucesso!');
    } catch (erro) {
        console.log('Erro ao conectar com o banco:', erro.message);
    }
}

testarConexao();
