const mongoose = require('mongoose');
const Product = mongoose.model('Product')


module.exports = {
  async getAll(req, res) {
    const { page = 1 } = req.query;
    //const products = await Product.find();
    const products = await Product.paginate({}, { page, limit: 10 })

    return res.json(products);
  },
  async get(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },
  async post(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },
  async put(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product)
  },
  async delete(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.status(204).send(`Removed`)
  }
}