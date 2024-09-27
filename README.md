# inDiet API

Este projeto é uma API para a gestão de usuários e suas refeições, desenvolvida em Node.js utilizando Prisma e SQLite.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- SQLite

## Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager)

## Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd inDiet-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração do Prisma:**
   - Abra o arquivo `schema.prisma` e verifique se a configuração do SQLite está assim:
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"  // O arquivo dev.db será criado na raiz do projeto
   }
   ```

4. **Crie o banco de dados:**
   ```bash
   npx prisma migrate dev --name init
   ```

## Executando o Projeto

1. **Inicie o servidor:**
   ```bash
   node server.js
   ```
   O servidor estará rodando em `http://localhost:3000`.

## Endpoints

### Usuários

- **Criar Usuário**
  - `POST /api/users`
  - **Body:**
    ```json
    {
      "username": "usuario1",
      "password": "senha123"
    }
    ```

- **Listar Usuários**
  - `GET /api/users`

- **Obter Usuário por ID**
  - `GET /api/users/:id`

- **Atualizar Usuário**
  - `PUT /api/users/:id`
  - **Body:**
    ```json
    {
      "username": "usuario_atualizado",
      "password": "nova_senha"
    }
    ```

- **Deletar Usuário**
  - `DELETE /api/users/:id`

### Refeições

- **Criar Refeição**
  - `POST /api/meals`
  - **Body:**
    ```json
    {
      "userId": 1,
      "name": "Almoço",
      "description": "Salada e Frango grelhado",
      "inDiet": true
    }
    ```

- **Listar Refeições**
  - `GET /api/meals`

- **Obter Refeição por ID**
  - `GET /api/meals/:id`

- **Atualizar Refeição**
  - `PUT /api/meals/:id`
  - **Body:**
    ```json
    {
      "userId": 1,
      "name": "Almoço Atualizado",
      "description": "Salada e Peixe grelhado",
      "inDiet": false
    }
    ```

- **Deletar Refeição**
  - `DELETE /api/meals/:id`

## Testando a API

Você pode testar a API utilizando ferramentas como Postman ou Insomnia. Certifique-se de enviar as requisições para `http://localhost:3000`.

### Exemplos de Teste com Postman/Insomnia

- **Criar Usuário:** Envie uma requisição `POST` para `/api/users` com o body apropriado.
- **Listar Usuários:** Envie uma requisição `GET` para `/api/users`.
- **Criar Refeição:** Envie uma requisição `POST` para `/api/meals` com o body apropriado.
