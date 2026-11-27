const { User } = require('../models/associations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Cadastra um usuário
async function create(req, res) {
    try {
        const { firstname, surname, email, password } = req.body;

        // Verifica os campos obrigatórios
        if (!firstname || !surname || !email || !password) {
            return res.status(400).json({
                mensagem: 'Preencha todos os campos.'
            });
        }

        // Verifica se o email já está cadastrado
        const usuarioExistente = await User.findOne({
            where: { email }
        });

        if (usuarioExistente) {
            return res.status(400).json({
                mensagem: 'Este email já está cadastrado.'
            });
        }

        // Protege a senha antes de salvar
        const senhaCriptografada = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname,
            surname,
            email,
            password: senhaCriptografada
        });

        return res.status(201).json({
            mensagem: 'Usuário cadastrado com sucesso!',
            id: user.id,
            firstname: user.firstname,
            surname: user.surname,
            email: user.email
        });

    } catch (erro) {
        return res.status(500).json({
            mensagem: 'Erro ao cadastrar usuário.',
            erro: erro.message
        });
    }
}

// Realiza o login
async function login(req, res) {
    try {
        const { email, password } = req.body;

        // Verifica os campos obrigatórios
        if (!email || !password) {
            return res.status(400).json({
                mensagem: 'Informe email e senha.'
            });
        }

        // Procura o usuário pelo email
        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                mensagem: 'Email ou senha incorretos.'
            });
        }

        // Compara a senha informada com a senha salva
        const senhaCorreta = await bcrypt.compare(password, user.password);

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: 'Email ou senha incorretos.'
            });
        }

        // Gera um token de autenticação
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            mensagem: 'Login realizado com sucesso!',
            token
        });

    } catch (erro) {
        return res.status(500).json({
            mensagem: 'Erro ao realizar login.',
            erro: erro.message
        });
    }
}

module.exports = {
    create,
    login
};