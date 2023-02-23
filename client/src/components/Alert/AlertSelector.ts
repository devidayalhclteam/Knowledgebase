import { createSelector } from "@reduxjs/toolkit";

const alertState = (state: any) => state.common.alert;

const alertSelector = createSelector(alertState, (state) => {
  return state;
});

export default alertSelector;
