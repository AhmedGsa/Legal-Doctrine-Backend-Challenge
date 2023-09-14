const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
} = require('../controllers/product');
const checkAuth = require('../middlewares/check-auth');
const checkAdmin = require('../middlewares/check-admin');

router
    .route('/')
    .get(getAllProducts)
    .post(checkAuth, checkAdmin, createProduct);

router.route('/search').get(searchProduct);

router
    .route('/:id')
    .patch(checkAuth, checkAdmin, updateProduct)
    .delete(checkAuth, checkAdmin, deleteProduct)
    .get(getProductById);

module.exports = router;