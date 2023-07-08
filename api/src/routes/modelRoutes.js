// Enrutado de productos
const { Router } = require('express');
const {
    getProductsHandler,
    getProductHandler,
    createProductHandler
} = require('../handlers/modelsHandler');

const modelRouter = Router();



modelRouter.get('/',getProductsHandler);

modelRouter.get('/:id', getProductHandler );

modelRouter.post('/', createProductHandler);



module.exports = modelRouter;