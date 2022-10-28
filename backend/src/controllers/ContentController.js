// Camada responsavel por lidar as requisições do usuarios
// Responsavel por gerenciar as ações realizadas vindas do frontend

// Importar o model
const Annotations = require("../models/AnnotationData");

module.exports = {
  // Alterar o conteudo de uma informação específica (exemplo: somente a variável 'notes')
  async update(request, response) {
    const { id } = request.params;
    const { notes } = request.body;

    // Retorna um registro específico do banco de dados com o 'findOne'
    const annotation = await Annotations.findOne({ _id: id });

    // Se tiver algum conteúdo no 'notes', ele irá sobrescrever o 'notes' e salvar
    if (notes) {
      annotation.notes = notes;
      await annotation.save();
    }

    return response.json(annotation);
  },
};
