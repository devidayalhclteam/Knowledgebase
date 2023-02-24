import { createSlice } from "@reduxjs/toolkit";

export interface Alert {
  showAlert: boolean;
  alertInfo: {
    severity: string;
    title: string;
    message: string;
    messageList: any;
  };
}

export const initialState: Alert = {
  showAlert: false,
  alertInfo: {
    severity: "info",
    title: "",
    message: "",
    messageList: []
  }
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      state.showAlert = true;
      state.alertInfo = action.payload;
    },
    clearAlert: (state) => {
      state.showAlert = false;
      state.alertInfo = initialState.alertInfo;
    }
  }
});

export const { clearAlert, displayAlert } = alertSlice.actions;

export default alertSlice.reducer;
