// Estrutura do banco de dados

const mongoose = require("mongoose");

// Schema do banco de dados
const AnnotationDataSchema = new mongoose.Schema({
  title: String,
  notes: String,
});

// Atribuindo a estrutura do Schema com a palavra 'Annotations'
module.exports = mongoose.model("Annotations", AnnotationDataSchema);
