"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getProductImages = (req, res) => {
    return services_1.ProductImagesService.getProductImages(req, res);
};
exports.default = { getProductImages, };
