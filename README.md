# Boas-vindas ao repositório do projeto API de Blogs!


<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary>

  Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog! 

  A aplicação foi feita em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts, e os endpoints conectados ao banco de dados foram desenvolvidos seguindo os princípios do REST.

<br />

# Orientações

Faça o clone do repositório e entre no respectivo diretório através do comando: `git clone git@github.com:fhparreiras/blogs-api.git && cd blogs-api`


<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte o número da porta na linha 31 do arquivo docker-compose.yml conforme sua necessidade. O mesmo vale para a porta `3000`;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências com `npm install` dentro do terminal do container.
  
 Execute o comando `npm start`dentro do container.

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Execute o comando `npm install` para instalar as dependências do projeto.
  
  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - Na raíz do projeto, configure um arquivo .env com as variáveis de ambiente do seu ambiente local para acessar o MySQL.

  <br/>
</details>
