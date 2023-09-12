const { BadRequestError, NotFoundError, UnauthorizedError } = require('../errors');
const Purchase = require('../models/Purchase');
const Product = require('../models/Product');

const createPurchase = async (req, res) => {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
        throw new BadRequestError('Please provide product and quantity');
    }
    const product = await Product.findById(productId);
    if (!product) {
        throw new BadRequestError('Please provide valid product');
    }
    // We can add the payment logic here and if the payment is successful, we can create the purchase

    const purchase = await Purchase.create({
        product: productId,
        user: req.user.id,
        quantity
    });
    res.status(201).json({ success: true, purchase });
}

const getUserPurchases = async (req, res) => {
    const userId = req.user.id;
    const purchases = await Purchase.find({ user: userId });
    res.status(200).json({ purchases });
}

const getPurchaseDetails = async (req, res) => {
    const { id: purchaseId } = req.params;
    const userId = req.user.id;
    const purchase = await Purchase.findById(purchaseId).populate('product');
    if (!purchase) {
        throw new NotFoundError('Purchase not found');
    }
    if (purchase.user.toString() !== userId) {
        throw new UnauthorizedError('You are not authorized to view this purchase');
    }
    res.status(200).json({ purchase });
}

module.exports = {
    createPurchase,
    getUserPurchases,
    getPurchaseDetails
}