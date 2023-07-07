const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Archivo de configuración de Sequelize

const Purchase = sequelize.define('Purchase', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = Purchase;
