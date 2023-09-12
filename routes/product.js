const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct).get(getProductById);

module.exports = router;