const User = require('../models/User');
const { ForbiddenError } = require('../errors');

const checkAdmin = async (req, res, next) => {
    const user = await User.findById(req.user.id);
    if(!user.isAdmin) {
        throw new ForbiddenError('Access denied');
    }
    next();
}

module.exports = checkAdmin;