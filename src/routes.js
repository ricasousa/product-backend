const express = require('express');
const routes = express.Router();

const productController = require('./controllers/product.controller');

routes.get(`/products`, productController.getAll)
routes.get(`/products/:id`, productController.get)
routes.post(`/products`, productController.post)
routes.put(`/products/:id`, productController.put)
routes.delete(`/products/:id`, productController.delete)

module.exports = routes;