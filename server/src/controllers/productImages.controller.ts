import { Request, Response } from "express";
import { productImagesService } from "../services";

const getProductImage = (req: Request, res: Response) => {
  return productImagesService.getProductImage(req, res);
};

const postProductImage = (req: Request, res: Response) => {
  return productImagesService.postProductImage(req, res);
};

const deleteProductImage = (req: Request, res: Response) => {
  return productImagesService.deleteProductImage(req, res);
};

export default { getProductImage, postProductImage, deleteProductImage };
