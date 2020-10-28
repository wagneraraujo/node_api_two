const Usuario = require("../models/usuario.model");
module.exports = {
  //index detalhe de cada usuario
  async index(req, res) {
    const user = await Usuario.find();
    res.json(user);
  },

  async create(req, res) {
    const {
      nome_usuario,
      email_usuario,
      tipo_usuario,
      senha_usuario
    } = req.body;

    let data = {};

    //verificar se o email ja existe
    let user = await Usuario.findOne({ email_usuario });
    if (!user) {
      data = { nome_usuario, email_usuario, tipo_usuario, senha_usuario };
      user = await Usuario.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },

  async details(req, res) {
    const id = req.params.id;
    const userDetails = await Usuario.findById(id);
    res.json(userDetails);
  },

  async delete(req, res) {
    const id = req.params.id;
    const deleteUser = await Usuario.findByIdAndDelete(id);
    return res.json({ message: "usuario removido" });
  },

  async update(req, res) {
    const {
      _id,
      nome_usuario,
      email_usuario,
      senha_usuario,
      tipo_usuario
    } = req.body;
    const data = { nome_usuario, email_usuario, senha_usuario, tipo_usuario };
    const user = await Usuario.findByIdAndUpdate({ _id }, data, { new: true });
    res.json(user);
  }
};
