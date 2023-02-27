import { Request, Response } from "express";
import { ProductsService } from "../services";

const getProducts = (req: Request, res: Response) => {
  return ProductsService.getProducts(req, res);
};

const postProducts = (req: Request, res: Response) => {
  return ProductsService.postProducts(req, res);
};

const updateProducts = (req: Request, res: Response) => {
  return ProductsService.updateProducts(req, res);
};

const deleteProduct = (req: Request, res: Response) => {
  return ProductsService.deleteProduct(req, res);
};

export default { getProducts, postProducts, deleteProduct, updateProducts };
