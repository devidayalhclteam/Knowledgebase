import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Category {
    categoryResponse: {
        partitionKey: string;
        rowKey: string;
        id: string;
        name: string;
        isActive: boolean;
        type: string;
        timestamp: string;
        etag: string;
    }
    isLoading: boolean;
}

const initialState: Category = {
    categoryResponse: {
        partitionKey: "",
        rowKey: "string",
        id: "string",
        name: "string",
        isActive: false,
        type: "string",
        timestamp: "string",
        etag: "string"
    },
    isLoading: false
}

export const getCategories = createAsyncThunk(
    "home/getCategories",
    async () => {
        try {
            const response = await axios.get("/api/table/category/category");
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
        builder.addCase(getCategories.pending, (state: Category) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(getCategories.fulfilled, (state: Category, { payload }) => {
            return { ...state, categoryResponse: payload, isLoading: false };
        })
        builder.addCase(getCategories.rejected, (state: Category) => {
            return { ...state, isLoading: false };
        })
    }
})

export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;