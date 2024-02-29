
# Template Node.js + Express + Mongoose + MongoDB

Este projeto é uma API backend para um sistema Kanban, construído com Node.js, Express, Mongoose, e MongoDB. Ele fornece funcionalidades para gerenciar usuários, tarefas (tasks) e categorias dentro de um quadro Kanban.

## Funcionalidades

- CRUD de Usuários
- CRUD de Tarefas
- CRUD de Categorias
- Autenticação de Usuários e gerenciamento de sessão
- Validações de entrada

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Bcryptjs (para hashing de senhas)
- JSON Web Tokens (para autenticação)
- Joi (para validação)
- Swagger UI Express (para documentação da API)

## Configuração e Instalação

### Pré-requisitos

- Node.js instalado na sua máquina
- Uma instância do MongoDB (local ou na nuvem)

### Passos para Instalação

1. Clone o repositório:

```bash
git clone https://github.com/henriquemalvar/template-nodejs-express-mongoose-mongodb.git
cd template-nodejs-express-mongoose-mongodb

```

1. Instale as dependências:

```bash

npm install

```

1. Crie um arquivo **`.env`** na raiz do projeto e configure as seguintes variáveis de ambiente conforme o exemplo:

```
MONGODB_URI=your_mongodb_uri_here
PORT=your_port_here
BCRYPT_SALT=your_bcrypt_salt_rounds_here
JWT_SECRET=your_jwt_secret_here

```

1. Inicie o servidor:
- Para desenvolvimento:

```
npm run dev
```

- Para produção:

```
npm run build
npm start
```


