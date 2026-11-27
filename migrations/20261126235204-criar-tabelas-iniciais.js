'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        // Cria a tabela de usuários
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            firstname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            surname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });

        // Cria a tabela de categorias
        await queryInterface.createTable('categories', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false
            },
            use_in_menu: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });

        // Cria a tabela de produtos
        await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            enabled: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false
            },
            use_in_menu: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            stock: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            description: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            price_with_discount: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });

        // Cria a tabela de imagens
        await queryInterface.createTable('product_images', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            enabled: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            path: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });

        // Cria a tabela de opções
        await queryInterface.createTable('product_options', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            shape: {
                type: Sequelize.ENUM('square', 'circle'),
                defaultValue: 'square'
            },
            radius: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            type: {
                type: Sequelize.ENUM('text', 'color'),
                defaultValue: 'text'
            },
            values: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });

        // Cria a tabela de relacionamento entre produtos e categorias
        await queryInterface.createTable('product_categories', {
            product_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            category_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'categories',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        });
    },

    async down(queryInterface) {
        // Exclui as tabelas na ordem inversa
        await queryInterface.dropTable('product_categories');
        await queryInterface.dropTable('product_options');
        await queryInterface.dropTable('product_images');
        await queryInterface.dropTable('products');
        await queryInterface.dropTable('categories');
        await queryInterface.dropTable('users');
    }
};