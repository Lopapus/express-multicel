const route = require('express').Router();

const { getProductos, getProducto, postProducto, putProducto, deleteProducto } = require('../controllers/productos.controller');

// middlewares
const { validateLogin, validateAdmin } = require('../middlewares/usuarios.middlewares');

route.get('/', [validateLogin, validateAdmin], getProductos);
route.get('/:id', [validateLogin, validateAdmin], getProducto);
route.post('/', [validateLogin, validateAdmin], postProducto);
route.put('/:id', [validateLogin, validateAdmin], putProducto);
route.delete('/', [validateLogin, validateAdmin], deleteProducto);

module.exports = route;
