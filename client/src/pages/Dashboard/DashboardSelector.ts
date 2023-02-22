import { createSelector } from "@reduxjs/toolkit";
import { Products } from "./DashboardSlice";

const dashboardState = (state: any) => state.dashboard.dashboard;

const dashboardSelector = createSelector(dashboardState, (state: any) => {

    const { productName, rating, externalProductLink, description, categoryId } = state.productForm;
    const { imageFile } = state.productImage;

    const isEmpty = () => {
        if (!productName || !rating || !externalProductLink || !description || !categoryId || !imageFile) {
            return true;
        }
        return false;
    };

    return {
        products: state.productResponse.data,
        productImage: state.productImage,
        currentIndex: state.currentIndex,
        selectedProducts: state.selectedProducts,
        productImages: state.productImageResponse.data,
        productImageTable: state.productImageTable,
        isAddProductSuccessful: state.isAddProductSuccessful,
        isDeleteProductSuccessful: state.isDeleteProductSuccessful,
        productForm: state.productForm,
        isDisabledSubmitBtn: isEmpty(),
        isModalOpen: state.isModalOpen,
        isLoading: state.isLoading
    }
});

export default dashboardSelector;