import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Home {
    displayView: string;
}

const initialState: Home = {
    displayView: "productHome"
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setDisplayView: (state: Home, action: PayloadAction<string>) => {
            state.displayView = action.payload;
        },
    },
    extraReducers: (builder) => {

    }
})

export const { } = homeSlice.actions;

export default homeSlice.reducer;