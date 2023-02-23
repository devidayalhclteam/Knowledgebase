import { createSelector } from "@reduxjs/toolkit";
import productHomeSelector from "../ProductHome/ProductHomeSelector";

const homeSelect = (state: any) => state.home.home;

const productDetailsSelector = createSelector(
    homeSelect, productHomeSelector,
    (homeState: any, productHomeState: any) => {

        let displayProduct;

        if (productHomeState.products.length) {
            displayProduct = productHomeState.products.find((product: any) => product.productId === homeState.displayProductId)
        }

        return {
            displayProduct
        }
    });

export default productDetailsSelector;
