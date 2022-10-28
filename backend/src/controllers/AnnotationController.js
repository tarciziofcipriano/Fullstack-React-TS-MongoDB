// Camada responsavel por lidar as requisições do usuarios
// Responsavel por gerenciar as ações realizadas vindas do frontend

// Importar o model
const Annotations = require("../models/AnnotationData");

module.exports = {
  // Request: é o que o frontend vai solicitar pro backend
  // Response: é o que nosso backend vai entregar para o frontend

  // Le os registros no banco de dados
  async read(request, response) {
    // Retorna todos os registros do banco de dados com o 'find'
    const annotationList = await Annotations.find();
    return response.json(annotationList);
  },

  // Cria os registros no banco de dados
  async create(request, response) {
    const { title, notes } = request.body;

    // Validação: envia uma mensagem caso ocorra erro
    if (!notes || !title) {
      return response
        .status(400)
        .json({ error: "Necessário um titulo/anotação!" });
    }

    // Crie registro no banco de dados
    const annotationCreated = await Annotations.create({
      title,
      notes,
    });

    return response.json(annotationCreated);
  },

  // Deleta os registros no banco de dados por id
  async delete(request, response) {
    const { id } = request.params;
    // Retorna um registros específico e deleta do banco de dados com o 'findOneAndDelete'
    const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });

    // Validação: se o annotationDeleted for válido
    if (annotationDeleted) {
      return response.json(annotationDeleted);
    }

    // Validação: envia uma mensagem caso ocorra erro
    return response
      .status(401)
      .json({ error: "Não foi encontrado o registo para deletar" });
  },
};
