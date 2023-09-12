const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if(token) {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if(!payload) {
            throw new UnauthorizedError('Unauthorized');
        }
        req.user = payload;
        next();
    } else {
        throw new UnauthorizedError('Unauthorized');
    }
}

module.exports = checkAuth;