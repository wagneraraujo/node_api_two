const express = require("express");

const routes = express.Router();
const Usuario = require("./controllers/usuario.controllers");

routes.get("/", Usuario.index);

//rotas de usuario
routes.post("/api/usuarios", Usuario.create);
routes.get("/api/usuarios", Usuario.index);
routes.get("/api/usuarios-details/:id", Usuario.details);
routes.delete("/api/usuarios/:id", Usuario.delete);

module.exports = routes;
