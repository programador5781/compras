const { Router } = require('express');


const purchaseRouter = Router();

// Entrar al sistema de compras
purchaseRouter.get('/', (req, res) => {
    res.status(200).send('Estoy en purchase');
    // const purchases = []; // Obtener la lista de compras desde la base de datos (ejemplo vacío)

    // // Cálculo del total de la compra
    // const total = purchases.reduce((acc, purchase) => acc + purchase.price, 0);

    // // Cálculo del IVA de la compra
    // const iva = total * 0.19;

    // // Descuento del 10% si la compra es superior a 100.000
    // const discount = total > 100000 ? total * 0.1 : 0;

    // // Cálculo de la compra más alta
    // const highestPurchase = purchases.reduce((acc, purchase) => {
    //     if (purchase.price > acc.price) {
    //         return purchase;
    //     }
    //     return acc;
    // }, { price: 0 });

    // // Enviar la respuesta con los resultados
    // res.status(200).json({
    //     total,
    //     iva,
    //     discount,
    //     highestPurchase
    // });
});


// obtener detalles de una compra
purchaseRouter.get('/:id', (req, res) => {
    res.status(200).send('Detalles de la compra')
});



module.exports = purchaseRouter;