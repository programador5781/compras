// Enrutado de productos
const { Router } = require('express');
const {
    getProductsHandler,
    getProductByIdHandler,
    createProductHandler
} = require('../handlers/modelsHandler');

const modelRouter = Router();



modelRouter.get('/',getProductsHandler);

modelRouter.get('/:id', getProductByIdHandler );

modelRouter.post('/', createProductHandler);



module.exports = modelRouter;