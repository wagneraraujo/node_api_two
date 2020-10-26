const Usuario = require("../models/usuario.model");
module.exports = {
  index(req, res) {
    res.json({ message: "Controle usuario" });
  },

  create(req, res) {
    const {
      nome_usuario,
      email_usuario,
      tipo_usuario,
      senha_usuario
    } = req.body;

    let data = {};

    //verificar se o email ja existe
    let user = Usuario.findOne({ email_usuario });
  }
};
