# Diet API

Uma API desenvolvida em Node.js usando Prisma para a criação e gestão de usuários e suas refeições. A API permite operações de CRUD para usuários e refeições.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- MySQL (ou outro banco de dados suportado)

## Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu_usuario/api-receitas.git
   cd api-receitas
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados**
   - Crie um banco de dados no MySQL.
   - Atualize o arquivo **.env** com a URL de conexão:
     ```
     DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/your_database"
     ```

4. **Inicialize o Prisma**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

## Execução

Para iniciar a API, execute o seguinte comando:

```bash
node server.js
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

### Usuários

- **Criar Usuário**
  - `POST /api/users`
  - **Corpo da requisição**:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

### Refeições

- **Criar Refeição**
  - `POST /api/meals`
  - **Corpo da requisição**:
    ```json
    {
      "userId": "integer",
      "name": "string",
      "description": "string",
      "inDiet": true
    }
    ```

## Demonstração

Você pode testar a API utilizando ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

## Contribuição

Sinta-se à vontade para contribuir! Faça um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License.

---

Sinta-se à vontade para ajustar qualquer parte do texto conforme necessário! Se precisar de mais alguma coisa, é só avisar.
