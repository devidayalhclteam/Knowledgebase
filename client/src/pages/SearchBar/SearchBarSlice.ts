import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Category {
    partitionKey: string;
    rowKey: string;
    id: string;
    name: string;
    isActive: boolean;
    type: string;
    timestamp: string;
    etag: string;
    loading: boolean;
}

const initialState: Category = {
    partitionKey: "",
    rowKey: "string",
    id: "string",
    name: "string",
    isActive: false,
    type: "string",
    timestamp: "string",
    etag: "string",
    loading: false
}

export const getCategories = createAsyncThunk(
    "home/GetCategories",
    async () => {
        try {
            const response = await axios.get("/api/category/category");
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.loading = false;
            // state.
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;