"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const getCategories = (req, res) => {
  return services_1.CategoryService.getCategories(req, res);
};
const postCategory = (req, res) => {
  return services_1.CategoryService.postCategory(req, res);
};
const deleteCategory = (req, res) => {
  return services_1.CategoryService.deleteCategory(req, res);
};
exports.default = { getCategories, postCategory, deleteCategory };
