const mongoose = require("mongoose");

const user = "admin";
const password = "admin";
const cluster = "annotations"

// Inseridos no link: usuario e senha do banco de dados e o nome do cluster
const dbConfig =
  `mongodb+srv://${user}:${password}@cluster0.lp4egsu.mongodb.net/${cluster}?retryWrites=true&w=majority`;

// Conectar o backend com o mangoDB
const connection = mongoose.connect(dbConfig, {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
