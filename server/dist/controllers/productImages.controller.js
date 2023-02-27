"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getProductImage = (req, res) => {
  return services_1.productImagesService.getProductImage(req, res);
};
const postProductImage = (req, res) => {
  return services_1.productImagesService.postProductImage(req, res);
};
const updateProductImage = (req, res) => {
  return services_1.productImagesService.updateProductImage(req, res);
};
const deleteProductImage = (req, res) => {
  return services_1.productImagesService.deleteProductImage(req, res);
};
exports.default = { getProductImage, postProductImage, updateProductImage, deleteProductImage };
