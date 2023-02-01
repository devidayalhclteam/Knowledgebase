import { createSelector } from "@reduxjs/toolkit";

const categoriesState = (state:any) => state.home.searchBar;

const categoriesSelector = createSelector(categoriesState, (state) => {
     
    return {}
 });

export default categoriesSelector;