"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = exports.CategoryService = void 0;
var category_service_1 = require("./category.service");
Object.defineProperty(exports, "CategoryService", { enumerable: true, get: function () { return __importDefault(category_service_1).default; } });
var product_service_1 = require("./product.service");
Object.defineProperty(exports, "ProductService", { enumerable: true, get: function () { return __importDefault(product_service_1).default; } });
