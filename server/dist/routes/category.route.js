"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.route('/getCategories').get(controllers_1.CategoryController.getCategories);
router.route('/postCategory').post(controllers_1.CategoryController.postCategory);
router.route('/deleteCategory').delete(controllers_1.CategoryController.deleteCategory);
// router.route('/updateCategory').post(CategoryController.updateCategory);
router.route("/category")
    .get(controllers_1.CategoryController.getCategories)
    .post(controllers_1.CategoryController.postCategory)
    .delete(controllers_1.CategoryController.deleteCategory);
exports.default = router;
