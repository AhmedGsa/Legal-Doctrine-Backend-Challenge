const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true, 'Please provide product']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    },
    quantity: {
        type: Number,
        required: [true, 'Please provide quantity']
    }
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);