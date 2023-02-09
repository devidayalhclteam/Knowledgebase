import express, { Express, Request, Response, } from 'express';
import categoryRoute from "./routes/category.route";
import productsRoute from "./routes/products.route";

const app: Express = express();
const port = 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is PWD api endpoint');
});

app.use("/api/category", categoryRoute);

app.use("/api/products", productsRoute);

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
