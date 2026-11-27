const {
    Product,
    ProductImage,
    ProductOption,
    Category
} = require('../models/associations');

// Cadastra um produto
async function create(req, res) {
    try {
        const {
            name,
            slug,
            price,
            price_with_discount,
            description,
            stock,
            enabled,
            use_in_menu,
            category_ids
        } = req.body;

        // Verifica os campos obrigatórios
        if (!name || !slug || price === undefined || price_with_discount === undefined) {
            return res.status(400).json({
                mensagem: 'Ei! Preencha os campos obrigatórios.'
            });
        }

        // Cadastra o produto
        const product = await Product.create({
            name,
            slug,
            price,
            price_with_discount,
            description,
            stock,
            enabled,
            use_in_menu
        });

        // Relaciona o produto com as categorias informadas
        if (category_ids && category_ids.length > 0) {
            await product.setCategories(category_ids);
        }

        return res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso!',
            produto: product
        });

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Ops! Não foi possível cadastrar o produto.',
            erro: erro.message
        });
    }
}

// Lista os produtos
async function list(req, res) {
    try {
        const products = await Product.findAll({
            include: [
                { model: ProductImage },
                { model: ProductOption },
                { model: Category }
            ]
        });

        return res.status(200).json(products);

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao listar produtos.',
            erro: erro.message
        });
    }
}

// Pesquisa produtos por nome
async function search(req, res) {
    try {
        const { Op } = require('sequelize');

        // Recebe o nome informado na pesquisa
        const nome = req.query.name;

        // Busca produtos que tenham o nome informado
        const products = await Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${nome}%`
                }
            }
        });

        return res.status(200).json(products);

    } catch (erro) {
        return res.status(500).json({
            mensagem: 'Erro ao pesquisar produtos.',
            erro: erro.message
        });
    }
}

// Busca um produto pelo ID
async function show(req, res) {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [
                { model: ProductImage },
                { model: ProductOption },
                { model: Category }
            ]
        });

        if (!product) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado.'
            });
        }

        return res.status(200).json(product);

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao buscar produto.',
            erro: erro.message
        });
    }
}

// Atualiza um produto
async function update(req, res) {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado.'
            });
        }

        await product.update(req.body);

        return res.status(204).send();

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao atualizar produto.',
            erro: erro.message
        });
    }
}

// Exclui um produto
async function remove(req, res) {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado.'
            });
        }

        await product.destroy();

        return res.status(204).send();

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao excluir produto.',
            erro: erro.message
        });
    }
}

// Cadastra uma imagem para o produto
async function createImage(req, res) {
    try {
        const { path, enabled } = req.body;
        const product_id = req.params.id;

        // Verifica se o produto existe
        const product = await Product.findByPk(product_id);

        if (!product) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado.'
            });
        }

        // Verifica se o caminho da imagem foi informado
        if (!path) {
            return res.status(400).json({
                mensagem: 'Informe o caminho da imagem.'
            });
        }

        // Cadastra a imagem
        const image = await ProductImage.create({
            product_id,
            path,
            enabled
        });

        return res.status(201).json({
            mensagem: 'Imagem cadastrada com sucesso!',
            imagem: image
        });

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao cadastrar imagem.',
            erro: erro.message
        });
    }
}

// Exclui uma imagem
async function removeImage(req, res) {
    try {
        const image = await ProductImage.findOne({
            where: {
                id: req.params.imageId,
                product_id: req.params.id
            }
        });

        if (!image) {
            return res.status(404).json({
                mensagem: 'Imagem não encontrada.'
            });
        }

        await image.destroy();

        return res.status(204).send();

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao excluir imagem.',
            erro: erro.message
        });
    }
}

// Cadastra uma opção para o produto
async function createOption(req, res) {
    try {
        const { title, shape, radius, type, values } = req.body;
        const product_id = req.params.id;

        // Verifica se o produto existe
        const product = await Product.findByPk(product_id);

        if (!product) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado.'
            });
        }

        // Verifica os campos obrigatórios
        if (!title || !type || !values) {
            return res.status(400).json({
                mensagem: 'Preencha os campos obrigatórios.'
            });
        }

        // Cadastra a opção
        const option = await ProductOption.create({
            product_id,
            title,
            shape,
            radius,
            type,
            values
        });

        return res.status(201).json({
            mensagem: 'Opção cadastrada com sucesso!',
            opcao: option
        });

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao cadastrar opção.',
            erro: erro.message
        });
    }
}

// Exclui uma opção do produto
async function removeOption(req, res) {
    try {
        const option = await ProductOption.findOne({
            where: {
                id: req.params.optionId,
                product_id: req.params.id
            }
        });

        // Verifica se a opção existe
        if (!option) {
            return res.status(404).json({
                mensagem: 'Opção não encontrada.'
            });
        }

        // Exclui a opção
        await option.destroy();

        return res.status(204).send();

    } catch (erro) {
        return res.status(400).json({
            mensagem: 'Erro ao excluir opção.',
            erro: erro.message
        });
    }
}

module.exports = {
    create,
    list,
    search,
    show,
    update,
    remove,
    createImage,
    removeImage,
    createOption,
    removeOption
};
