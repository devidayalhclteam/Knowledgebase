import express, { Express, Request, Response, } from 'express';
const fileUpload = require('express-fileupload');
import categoryRoute from "./routes/category.route";
import productsRoute from "./routes/products.route";
import productImagesRoute from "./routes/productImages.route";

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(fileUpload());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is PWD api endpoint');
});

app.use("/api/table/category", categoryRoute);
app.use("/api/table/products", productsRoute);
app.use("/api/table/productImages", productImagesRoute);

/** Error handling */
app.use((req: Request, res: Response) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
