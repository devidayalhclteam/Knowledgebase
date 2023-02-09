import { createSelector } from "@reduxjs/toolkit";

const homeState = (state: any) => state.home.home;

const homeSelector = createSelector(homeState, (state: any) => ({
    displayView: state.displayView
}));

export default homeSelector;