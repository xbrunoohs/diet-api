# inDiet API

Este projeto é uma API para a gestão de usuários e suas refeições, desenvolvida em Node.js utilizando Prisma e SQLite.

### Desenvolvido por
Bruno Henrique Souza e Gabriel Maciel de Oliveira

## Tecnologias

- Node.js
- Express
- Prisma
- SQLite

## Pré-requisitos

- Node.js
- NPM

## Configuração do Ambiente

1. **Clone o repositório e abra:**
   ```bash
   git clone <link-do-repo>
   cd inDiet-api
   ```

2. **Configuração do Prisma:**
   - Abra o arquivo `schema.prisma` e verifique se a configuração do SQLite está assim:
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"  // O arquivo dev.db será criado na raiz do projeto
   }
   ```

3. **Crie o banco de dados:**
   ```bash
   npx prisma migrate dev --name init
   ```

## Executando o Projeto

1. **Iniciar o servidor:**
   ```bash
   node server.js
   ```
   O servidor estará rodando em `http://localhost:3000`.

## Testando a API

Você pode testar a API utilizando ferramentas como Postman ou Insomnia. Certifique-se de enviar as requisições para `http://localhost:3000`.

### Os exemplos de testes estão dentro do arquivo `testesPOSTMANapi.txt`
