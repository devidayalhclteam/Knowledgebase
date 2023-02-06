import { createSelector } from "@reduxjs/toolkit";

const categoriesState = (state: any) => state.home.searchBar;

const categoriesSelector = createSelector(categoriesState, (state: any) => ({
    categories: state.categoryResponse.data,
    isLoading: state.isLoading
}));

export default categoriesSelector;