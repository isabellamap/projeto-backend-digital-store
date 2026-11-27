const jwt = require('jsonwebtoken');

// Verifica se o usuário está autenticado
function auth(req, res, next) {
    // Recebe o token enviado na requisição
    const authHeader = req.headers.authorization;

    // Verifica se o token foi informado
    if (!authHeader) {
        return res.status(401).json({
            mensagem: 'Token não informado.'
        });
    }

    // Separa a palavra Bearer do token
    const token = authHeader.split(' ')[1];

    try {
        // Verifica se o token é válido
        const dadosUsuario = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Guarda os dados do usuário na requisição
        req.user = dadosUsuario;

        // Permite continuar a requisição
        next();

    } catch (erro) {
        return res.status(401).json({
            mensagem: 'Token inválido ou expirado.'
        });
    }
}

module.exports = auth;