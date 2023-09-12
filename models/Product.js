const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name must be provided'],
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided'],
    },
    category: {
        type: String,
        enum: ['Clothes', 'Food', 'Technology', 'Other'],
        required: [true, 'Product category must be provided'],
    },
    available: {
        type: Boolean,
        default: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);