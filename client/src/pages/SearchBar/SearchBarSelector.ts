import { createSelector } from "@reduxjs/toolkit";

const categoriesState = (state: any) => state.home.searchBar;

const searchBarSelector = createSelector(categoriesState, (state: any) => ({
    categories: state.categoryResponse.data,
    isLoading: state.isLoading,
    searchForm: state.searchForm
}));

export default searchBarSelector;