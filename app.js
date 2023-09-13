require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const swaggerDocument = YAML.load('./swagger.yaml');

// routers

const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
const purchaseRouter = require('./routes/purchase');
const cardsRouter = require('./routes/cards');
const port = 3000 || process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/purchases', purchaseRouter);
app.use('/api/v1/cards', cardsRouter);

// error handler
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}
    

start();