import { createSelector } from "@reduxjs/toolkit";

const dashboardState = (state: any) => state.dashboard.dashboard;

const dashboardSelector = createSelector(dashboardState, (state: any) => {

    const { productName, rating, externalProductLink, description, categoryId } = state.productForm;
    const { imageFile } = state.productImage;
    const modalViewName = state.modalViewName;
    const { productImageTable } = state.productImageTable;

    const isEmpty = () => {
        if (!productName || !rating || !externalProductLink || !description || !categoryId ||
            (JSON.stringify(imageFile) === JSON.stringify({}) && modalViewName === "AddProduct") ||
            (!!productImageTable && modalViewName === "EditProduct" && (!productImageTable?.imageUrl1 || !productImageTable?.isActive))
        ) {
            return true;
        }
        return false;
    };

    return {
        products: state.productResponse.data,
        categories: state.categoryResponse,
        productImage: state.productImage,
        currentIndex: state.currentIndex,
        selectedProducts: state.selectedProducts,
        productImages: state.productImageResponse.data,
        productImageTable: state.productImageTable,
        isAddProductSuccessful: state.isAddProductSuccessful,
        isDeleteProductSuccessful: state.isDeleteProductSuccessful,
        isUpdatedProductSuccessful: state.isUpdatedProductSuccessful,
        productForm: state.productForm,
        isDisabledSubmitBtn: isEmpty(),
        isModalOpen: state.isModalOpen,
        modalViewName: state.modalViewName,
        isLoading: state.isLoading
    }
});

export default dashboardSelector;