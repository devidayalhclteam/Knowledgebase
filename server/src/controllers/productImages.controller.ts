import { Request, Response } from "express"
import { ProductImagesService } from "../services";

const getProductImages = (req: Request, res: Response) => {
    return ProductImagesService.getProductImages(req, res);
};

export default { getProductImages, };