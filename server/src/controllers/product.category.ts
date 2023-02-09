import { Request, Response } from "express"
import { ProductService } from "../services";

const getProductImage = (req: Request, res: Response) => {
    return ProductService.getProductImage(req, res);
};


export default { getProductImage,  };