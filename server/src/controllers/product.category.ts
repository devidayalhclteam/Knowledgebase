import { Request, Response } from "express"
import { ProductService } from "../services";

const getProductImage = (req: Request, res: Response) => {
    return ProductService.getProductImage(req, res);
};

const addProductImage = (req: Request, res: Response) => {
    return ProductService.addProductImage(req, res);
};

export default { getProductImage, addProductImage };