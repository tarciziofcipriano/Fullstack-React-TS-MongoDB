// Rotas do servidor

const express = require("express");
const routes = express.Router();

// Importar o controller
const AnnotationController = require("./controllers/AnnotationController");
const ContentController = require("./controllers/ContentController");

// Rotas do (./controllers/AnnotationController)
routes.post("/annotations", AnnotationController.create);
routes.get("/annotations", AnnotationController.read);
routes.delete("/annotations/:id", AnnotationController.delete);

// Rotas do (./controllers/ContentController)
routes.post("/contents/:id", ContentController.update);

module.exports = routes;
