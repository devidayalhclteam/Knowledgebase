import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductHome {
    isLoading: boolean,
    productImagesResponse: []
}

const initialState: ProductHome = {
    isLoading: false,
    productImagesResponse: []
};

export const getProductImages = createAsyncThunk(
    "home/getProductImages",
    async () => {
        try {
            const response = await axios.get("/api/blob/product/product");
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

const productImagesSlice = createSlice({
    name: "productImages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductImages.pending, (state: any) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(getProductImages.fulfilled, (state: any, { payload }) => {
            return { ...state, productImagesResponse: payload.data, isLoading: false };
        })
        builder.addCase(getProductImages.rejected, (state: any) => {
            return { ...state, isLoading: false };
        })
    }
})

export const { } = productImagesSlice.actions;

export default productImagesSlice.reducer;
