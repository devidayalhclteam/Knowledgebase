import { createSelector } from "@reduxjs/toolkit";
import productHomeSelector from "../ProductHome/ProductHomeSelector";

const homeSelect = (state: any) => state.home.home;

const productDetailsSelector = createSelector(
  homeSelect,
  productHomeSelector,
  (homeState: any, productHomeState: any) => {
    let displayProduct: any;

    if (productHomeState.products.length) {
      displayProduct = productHomeState.products.find(
        (product: any) => product.productId === homeState.displayProductId
      );
    }

    let relatedProducts;

    if (displayProduct) {
      relatedProducts = productHomeState.products.filter(
        (product: any) =>
          product.categoryId === displayProduct.categoryId && product.productId !== displayProduct.productId
      );
    }

    return {
      displayProduct,
      relatedProducts
    };
  }
);

export default productDetailsSelector;
