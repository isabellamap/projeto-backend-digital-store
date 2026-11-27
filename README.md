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

Antes de iniciar, é necessário ter instalado:

- Node.js
- npm
- MySQL

### 2. Clonar o repositório

```bash
git clone https://github.com/isabellamap/projeto-backend-digital-store.git
```

Entre na pasta do projeto:

```bash
cd projeto-backend-digital-store
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar o banco de dados

Crie um banco de dados MySQL e configure suas informações no arquivo `.env`.

Utilize o arquivo `.env.example` como modelo para criar seu próprio `.env`.

Preencha as informações de conexão com o banco de dados e defina uma chave secreta para o JWT.

### 5. Executar as migrations

Para criar as tabelas do banco de dados, execute:

```bash
npx sequelize-cli db:migrate
```

### 6. Iniciar o servidor

Para iniciar em modo de desenvolvimento:

```bash
npm run dev
```

Ou para iniciar normalmente:

```bash
npm start
```

O servidor será iniciado na porta 3000.

## Principais rotas da API

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
| GET | `/v1/product/search?name=` | Pesquisar produtos pelo nome |
| GET | `/v1/product/:id` | Consultar produto |
| PUT | `/v1/product/:id` | Atualizar produto |
| DELETE | `/v1/product/:id` | Excluir produto |
| POST | `/v1/product/:id/images` | Adicionar imagem |
| DELETE | `/v1/product/:id/images/:imageId` | Excluir imagem |
| POST | `/v1/product/:id/options` | Adicionar opção |
| DELETE | `/v1/product/:id/options/:optionId` | Excluir opção |

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

Para acessar essas rotas, é necessário enviar o token JWT no cabeçalho da requisição:

```text
Authorization: Bearer SEU_TOKEN
```

O token é obtido após realizar o login.

## Banco de dados

O projeto utiliza MySQL com Sequelize para o gerenciamento das tabelas e relacionamentos.

As migrations são utilizadas para criar a estrutura do banco de dados.

## Autora

**Isabella Mapurunga Sobral**
