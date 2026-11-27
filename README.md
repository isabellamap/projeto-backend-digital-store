# Projeto Backend - Digital Store

API REST desenvolvida como projeto do curso Desenvolvedor Full Stack da Digital College.

O projeto tem como objetivo gerenciar os dados de uma loja virtual, incluindo usuários, produtos e categorias.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Sequelize
- JavaScript
- Bcrypt
- JSON Web Token (JWT)

## Funcionalidades

- Cadastro e login de usuários.
- Criptografia de senhas.
- Autenticação com JWT.
- Cadastro, consulta, atualização e exclusão de produtos.
- Cadastro, consulta, atualização e exclusão de categorias.
- Pesquisa de produtos pelo nome.
- Associação entre produtos e categorias.
- Cadastro e exclusão de imagens de produtos.
- Cadastro e exclusão de opções de produtos.

## Como executar o projeto

### 1. Pré-requisitos

- Node.js
- MySQL
- npm

### 2. Instalar as dependências

Execute no terminal:

    npm install

### 3. Configurar o banco de dados

Crie um banco de dados MySQL e configure suas informações no arquivo `.env`.

Use o arquivo `.env.example` como modelo para preencher as configurações.

### 4. Executar as migrations

Execute no terminal:

    npx sequelize-cli db:migrate

### 5. Iniciar o servidor

Para iniciar em modo de desenvolvimento, execute:

    npm run dev

O servidor será iniciado na porta 3000.

## Principais rotas

### Usuários

| Método | Rota | Descrição |
|---|---|---|
| POST | `/v1/user` | Cadastrar usuário |
| POST | `/v1/user/login` | Fazer login |

### Produtos

| Método | Rota | Descrição |
|---|---|---|
| POST | `/v1/product` | Criar produto |
| GET | `/v1/product` | Listar produtos |
| GET | `/v1/product/search?name=` | Pesquisar produtos |
| GET | `/v1/product/:id` | Consultar produto |
| PUT | `/v1/product/:id` | Atualizar produto |
| DELETE | `/v1/product/:id` | Excluir produto |

### Categorias

| Método | Rota | Descrição |
|---|---|---|
| POST | `/v1/category` | Criar categoria |
| GET | `/v1/category` | Listar categorias |
| GET | `/v1/category/:id` | Consultar categoria |
| PUT | `/v1/category/:id` | Atualizar categoria |
| DELETE | `/v1/category/:id` | Excluir categoria |

## Autenticação

As rotas de criação, atualização e exclusão de produtos e categorias exigem autenticação.

Para acessá-las, envie o token JWT no cabeçalho da requisição:

`Authorization: Bearer SEU_TOKEN`

O token é obtido após realizar o login.

## Banco de dados

O projeto utiliza MySQL com Sequelize para o gerenciamento das tabelas e relacionamentos.

As migrations são utilizadas para criar a estrutura do banco de dados.

## Autora

Isabella Mapurunga Sobral