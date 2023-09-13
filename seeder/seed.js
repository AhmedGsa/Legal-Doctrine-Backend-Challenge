const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const { products, users } = require('./data');

const seedDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await User.deleteMany();
    await Product.insertMany(products);
    await Promise.all(users.map(async (user) => {
        await User.create(user);
    }));
}

seedDB().then(() => {
    console.log('Database has been populated');
    process.exit(0);
}).catch((error) => {
    console.log(error);
    process.exit(1);
})