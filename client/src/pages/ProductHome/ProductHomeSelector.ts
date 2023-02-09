import { createSelector } from "@reduxjs/toolkit";

const productImagesState = (state: any) => state.home.productHome;

const productImagesSelector = createSelector(productImagesState, (state: any) => ({
    isLoading: state.isLoading,
    productImages: state.productImagesResponse
}))

export default productImagesSelector;