import { createSelector } from "@reduxjs/toolkit";

const categoriesState = (state: any) => state.home.searchBar;

const searchBarSelector = createSelector(categoriesState, (state: any) => {
  const categoryArray = state.categoryResponse.data || [];

  return {
    categories: [{ name: "All Categories", rowKey: "a", id: "1" }, ...categoryArray],
    isLoading: state.isLoading,
    searchForm: state.searchForm
  };
});

export default searchBarSelector;
