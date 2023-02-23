"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getProductImage = (req, res) => {
    return services_1.ProductService.getProductImage(req, res);
};
const postProductImage = (req, res) => {
    return services_1.ProductService.postProductImage(req, res);
};
const deleteProductImage = (req, res) => {
    return services_1.ProductService.deleteProductImage(req, res);
};
exports.default = { getProductImage, postProductImage, deleteProductImage };
