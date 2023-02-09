import express from "express";
import { ProductsController } from "../controllers";

const router = express.Router();

router.route("/products")
    .get(ProductsController.getProducts)
    .post(ProductsController.postProducts)
    .delete(ProductsController.deleteProduct)
    // .put(ProductsController.updateProducts)

export default router;