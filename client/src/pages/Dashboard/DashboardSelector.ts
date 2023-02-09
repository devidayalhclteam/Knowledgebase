import { createSelector } from "@reduxjs/toolkit";
import { Products } from "./DashboardSlice";

const dashboardState = (state: any) => state.dashboard.dashboard;

const dashboardSelector = createSelector(dashboardState, (state: any) => ({
    products: state.productResponse.data,
    productForm: state.productForm,
    isModalOpen: state.isModalOpen,
    isLoading: state.isLoading
}));

export default dashboardSelector;