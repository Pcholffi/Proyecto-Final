const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: String,
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    image: String,
}, {
    timestamps: true, // poner los datos de creacion y actualizacion
    collection: 'products'
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product
//console.log(mongoose);