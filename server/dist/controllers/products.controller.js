"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getProducts = (req, res) => {
    return services_1.ProductsService.getProducts(req, res);
};
const postProducts = (req, res) => {
    console.log("post");
    return services_1.ProductsService.postProducts(req, res);
};
const deleteProduct = (req, res) => {
    return services_1.ProductsService.deleteProduct(req, res);
};
// export default { getProducts, postProducts, deleteProducts };
exports.default = { getProducts, postProducts, deleteProduct };