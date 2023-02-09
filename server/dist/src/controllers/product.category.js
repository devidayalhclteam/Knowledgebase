"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getProduct = (req, res) => {
    return services_1.ProductService.getProduct(req, res);
};
exports.default = { getProduct, };
