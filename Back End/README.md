<h1> Backend Shopper </h1>

<h2> Como iniciar o Backend </h2>

**Passos para rodar a aplicação:**

<p>Antes de tudo:</p>

-   instalar MySQL 8
-   criar um Banco de Dados no MySQL
-   executar as queries do sql/database.sql no terminal ou em um programa de sua preferência

<h3> Preparação do ambiente <h3>

<p>Agora clone o repositório em sua máquina</p>

<p> Em seguida, abra o terminal na pasta raiz do backend e instale os pacotes de <strong>dependências</strong> rodando o seguinte comando no seu terminal:</p>

```shell
utilizando npm: npm install
utilizando yarn: yarn
```

<p>Para criar a conexão com o seu banco de dados, crie um arquivo .env na raiz do projeto como no exempo do arquivo .env.exemple e preencha com os seus dados:</p>

```shell
DATABASE_URL="mysql2://user:password@localhost:port/database"
```

<h3> Parabéns!! O seu projeto backend Shopper está pronto para rodar :) <h3>

<p>Execute o comando a seguir para rodar o projeto:</p>

```shell
utilizando npm: npm run dev
utilizando yarn: yarn dev
```

<h3> Atenção: <h3>

<p>Deixe o projeto backend em execução e abra uma nova janela da sua IDE na raiz do projeto frontend e vamos lá para fazer o teste das features.</p>
