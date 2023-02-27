import express from "express";
import { CategoryController } from "../controllers";

const router = express.Router();

router
  .route("/category")
  .get(CategoryController.getCategories)
  .post(CategoryController.postCategory)
  .delete(CategoryController.deleteCategory);
// .put(CategoryController.updateCategories)

export default router;
