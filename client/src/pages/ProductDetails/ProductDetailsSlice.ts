import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductDetails {

}

const initialState: ProductDetails = {

};

const productListSlice = createSlice({
    name: "productList",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const { } = productListSlice.actions;

export default productListSlice.reducer;