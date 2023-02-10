"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getProductImage = (req, res) => {
    return services_1.ProductService.getProductImage(req, res);
};
const addProductImage = (req, res) => {
    return services_1.ProductService.addProductImage(req, res);
};
exports.default = { getProductImage, addProductImage };
