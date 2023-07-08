const Model = require('../src/models/Model');
const Purchase = require('../src/models/Purchase');

// Establecer la relación entre Model y Purchase
Purchase.belongsTo(Model); // Una compra pertenece a un modelo
Model.hasMany(Purchase); // Un modelo puede tener varias compras

module.exports = {
  Model,
  Purchase
};
