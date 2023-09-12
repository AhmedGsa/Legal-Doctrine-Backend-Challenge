require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const port = 3000 || process.env.PORT;

// routers
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');

// middleware
app.use(express.json());
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);

// error handler
const errorHandlerMiddleware = require('./middlewares/error-handler');
app.use(errorHandlerMiddleware);

const start = async () => {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
    });
}

start();