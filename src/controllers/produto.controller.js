const Produto = require("../models/produto.model");
module.exports = {
  //index detalhe de cada produto
  async index(req, res) {
    const product = await Produto.find();
    res.json(product);
  },

  async create(req, res) {
    const {
      nome_produto,
      descricao_produto,
      preco_produto,
      qtd_produto
    } = req.body;

    let data = {};

    //verificar se o email ja existe
    let product = await Produto.findOne({ nome_produto });
    if (!product) {
      data = { nome_produto, descricao_produto, preco_produto, qtd_produto };
      product = await Produto.create(data);
      return res.status(200).json(product);
    } else {
      return res.status(500).json(product);
    }
  },

  async details(req, res) {
    const id = req.params.id;
    const produtoDetail = await Produto.findById(id);
    res.json(produtoDetail);
  },

  async delete(req, res) {
    const id = req.params.id;
    const deleteProduto = await Produto.findByIdAndDelete(id);
    return res.json({ message: "produto removido" });
  },

  async update(req, res) {
    //desestrutura requiscao body
    const {
      _id,
      nome_produto,
      descricao_produto,
      preco_produto,
      qtd_produto
    } = req.body;

    //novos dados
    const data = {
      nome_produto,
      descricao_produto,
      preco_produto,
      qtd_produto
    };
    const product = await Produto.findByIdAndUpdate({ _id }, data, {
      new: true
    });
    res.json(product);
  }
};
