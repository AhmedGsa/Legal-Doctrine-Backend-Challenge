const { BadRequestError, NotFoundError } = require('../errors');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    const {page, pageSize} = req.query;
    if(!page || !pageSize) {
        throw new BadRequestError('Please provide page and pageSize parameters');
    }
    const products = await Product.find({}).limit(parseInt(pageSize)).skip((parseInt(page) - 1) * parseInt(pageSize));
    return res.status(200).json({products});
};

const getProductById = async (req, res) => {
    const {id: productId} = req.params;
    if(!productId) {
        throw new BadRequestError('Please provide a product id');
    }
    const product = await Product.findOne({_id: productId});
    if(!product) {
        throw new NotFoundError(`Product with id ${productId} not found`);
    }
    return res.status(200).json({product});
};

const createProduct = async (req, res) => {
    const {name, price, category} = req.body;
    const product = await Product.create({name, price, category});
    return res.status(201).json({msg: 'Product created', product});
};

const updateProduct = async (req, res) => {
    const {id: productId} = req.params;
    const {name, price, category, available} = req.body;
    if(!productId) {
        throw new BadRequestError('Please provide a product id');
    }
    const product = await Product.findOneAndUpdate({_id: productId}, {name, price, category, available}, {new: true, runValidators: true});
    if(!product) {
        throw new NotFoundError(`Product with id ${productId} not found`);
    }
    return res.status(200).json({msg: 'Product updated', product});
};

const deleteProduct = async (req, res) => {
    const {id: productId} = req.params;
    if(!productId) {
        throw new BadRequestError('Please provide a product id');
    }
    await Product.findOneAndDelete({_id: productId});
    return res.status(200).json({msg: 'Product deleted'});
};

const searchProduct = async (req, res) => {
    const {name, category, minPrice, maxPrice} = req.query;
    let query = {};
    if(name) {
        query.name = {$regex: name, $options: 'i'};
    }
    if(category) {
        query.category = category;
    }
    if(minPrice && maxPrice) {
        query.price = {$gte: minPrice, $lte: maxPrice};
    }
    const products = await Product.find(query);
    return res.status(200).json({products});
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProduct
};