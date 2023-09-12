const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, searchProduct } = require('../controllers/product');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/search').get(searchProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct).get(getProductById);

module.exports = router;