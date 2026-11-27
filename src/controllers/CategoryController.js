const { Category } = require('../models/associations');

// Cadastra uma categoria
async function create(req, res) {
    try {
        const { name, slug, use_in_menu } = req.body;

        // Verifica os campos obrigatórios
        if (!name || !slug) {
            return res.status(400).json({
                mensagem: 'Informe o nome e o slug da categoria.'
            });
        }

        const category = await Category.create({
            name,
            slug,
            use_in_menu
        });

        return res.status(201).json(category);

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao cadastrar categoria.',
            erro: erro.message
        });
    }
}

// Lista as categorias
async function list(req, res) {
    try {
        const categories = await Category.findAll();

        return res.status(200).json(categories);

    } catch (erro) {
        return res.status(500).json({
            mensagem: 'Erro ao listar categorias.',
            erro: erro.message
        });
    }
}

// Busca uma categoria pelo ID
async function show(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({
                mensagem: 'Categoria não encontrada.'
            });
        }

        return res.status(200).json(category);

    } catch (erro) {
        return res.status(500).json({
            mensagem: 'Erro ao buscar categoria.',
            erro: erro.message
        });
    }
}

// Atualiza uma categoria
async function update(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({
                mensagem: 'Categoria não encontrada.'
            });
        }

        await category.update(req.body);

        return res.status(204).send();

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao atualizar categoria.',
            erro: erro.message
        });
    }
}

// Exclui uma categoria
async function remove(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);

        if (!category) {
            return res.status(404).json({
                mensagem: 'Categoria não encontrada.'
            });
        }

        await category.destroy();

        return res.status(204).send();

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao excluir categoria.',
            erro: erro.message
        });
    }
}

// Exporta as funções
module.exports = {
    create,
    list,
    show,
    update,
    remove
};