const express = require("express");
const app = express();
const cors = require("cors");

// Importar as rotas
const routes = require("./Routes");

// Iniciar o MongoDB
require("./config/dbConfig");

// Recurso que permite que outros endereços acessem o backend
app.use(cors());

// Recurso que diz para o express ler arquivos .json
app.use(express.json());

// Adicionar as informações das rotas no mongoDB
app.use(routes);

app.listen(3333);
