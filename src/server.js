// Importa nossa aplicação
const app = require('./app');

// Define a porta do servidor
const PORT = 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
