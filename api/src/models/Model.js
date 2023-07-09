// Modelo de los productos
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Model', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.JSONB,
            allowNull: true
        }

    },
        {
            timestamps: false
        }
    );
};
