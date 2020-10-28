const express = require("express");

const routes = express.Router();
const Usuario = require("./controllers/usuario.controllers");
const Produto = require("./controllers/produto.controller");

routes.get("/", Usuario.index);

//rotas de usuario
routes.post("/api/usuarios", Usuario.create);
routes.get("/api/usuarios", Usuario.index);
routes.get("/api/usuarios-details/:id", Usuario.details);
routes.delete("/api/usuarios/:id", Usuario.delete);
routes.put("/api/usuarios", Usuario.update);

//rotas de produtos
routes.post("/api/produtos", Produto.create);
routes.get("/api/produtos", Produto.index);
routes.get("/api/produto-details/:id", Produto.details);
routes.delete("/api/produto/:id", Produto.delete);
routes.put("/api/produto", Produto.update);

module.exports = routes;
