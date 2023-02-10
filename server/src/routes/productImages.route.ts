import express from "express";
import { ProductImagesController } from "../controllers";

const router = express.Router();

router.route("/productImages")
    .get(ProductImagesController.getProductImages)
    // .post(ProductsController.postProducts)
    // .delete(ProductsController.deleteProduct)
    // .put(ProductsController.updateProducts)

export default router;