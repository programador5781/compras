const { Router } = require('express');
const {
    getPurchasesHandler,
    getPurchaseHandler,
    createPurchaseHandler
} = require('../handlers/purchaseHandler');


const purchaseRouter = Router();

// Entrar al sistema de compras
purchaseRouter.get('/', getPurchasesHandler
    // const purchases = []; // Obtener la lista de compras desde la base de datos (ejemplo vacío)

    
);


// obtener detalles de una compra por id
purchaseRouter.get('/:id', getPurchaseHandler);
purchaseRouter.post('/', createPurchaseHandler);



module.exports = purchaseRouter;