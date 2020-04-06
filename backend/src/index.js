// variável para utilizar o express
const express = require('express');
// rota importada de src/route.js, quando for pacote coloca só o nome, quando é arquivo coloca a rota ex: './'
const routes = require('./routes');
// CORS
const cors = require('cors');
// atribuir o Express para uma variável do app
const app = express();

// utiliza o cors, faz com que sejam permitidas as requisições
app.use(cors());

// para avisar o express que as requisições serão feitas em json
// estamos falando para o express: antes de todas as requisições ir no corpo da requisição e transformar o json em um objeto compreensível pra minha aplicação
app.use(express.json());
// faz com que as rotas sejam utilizadas
app.use(routes);
// atribuir porta ao Express
app.listen(3333);

module.exports = app;