const { Model } = require('../db');

// Obtener listado de todos los productos
// Get /models
// Get 7models?name=
const getProductsHandler = async (req, res) => {
    const title = req.query['title']
    console.log('este es el title', title);

    try {
        const allModels = await Model.findAll();
        if (title) {
            const byTitle = await allModels.filter(i => i.title.toLowerCase().startsWith(title.toLowerCase()))
            byTitle.length ?
                res.json(byTitle) :
                res.status(404).send({ message: 'No existe un producto con ese nombre ' + title })
        } else {
            res.json(allModels);
        }
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
    //res.status(200).send('Estoy en modelos de productos');
};

// Obtener producto por id
const getProductByIdHandler = async (req, res) => {
    const { id } = req.params    

    res.status(200).send(`Enviando detalle de id ${id}`);

};


// Creación de un producto
const createProductHandler = (req, res) => {
    res.status(201).send('Estoy creando un producto');
};



module.exports = {
    getProductsHandler,
    getProductByIdHandler,
    createProductHandler
}