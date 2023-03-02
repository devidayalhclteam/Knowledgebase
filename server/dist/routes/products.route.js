"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router
    .route("/products")
    .get(controllers_1.ProductsController.getProducts)
    .post(controllers_1.ProductsController.postProducts)
    .delete(controllers_1.ProductsController.deleteProduct)
    .put(controllers_1.ProductsController.updateProducts);
exports.default = router;
