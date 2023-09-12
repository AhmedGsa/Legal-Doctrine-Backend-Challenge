const { BadRequestError } = require('../errors');
const User = require('../models/User');

const login = async (req, res) => {
    const { email, password, rememberMe } = req.body;
    if(!email || !password) {
        throw new BadRequestError('Please provide email and password');
    }
    const user = await User.findOne({ email });
    if(!user) {
        throw new BadRequestError('Invalid credentials');
    }
    const isMatch = await user.matchPasswords(password);
    if(!isMatch) {
        throw new BadRequestError('Invalid credentials');
    }
    const token = user.createJWT(rememberMe);
    res.status(200).json({ success: true, token });
}

const register = async (req, res) => {
    const { email, password, rememberMe } = req.body;
    if(!email || !password) {
        throw new BadRequestError('Please provide email and password');
    }
    const user = await User.create({ email, password });
    const token = user.createJWT(rememberMe);
    res.status(201).json({ success: true, token });
}

module.exports = {
    login,
    register
}