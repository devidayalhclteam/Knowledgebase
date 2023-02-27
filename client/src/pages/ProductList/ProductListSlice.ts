import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductList {
  searchForm: {
    searchSelect: string;
    searchInput: string;
  };
  productIndex: number;
  finalProducts: [];
  sortOrder: string;
}

const initialState: ProductList = {
  searchForm: {
    searchSelect: "",
    searchInput: ""
  },
  productIndex: 8,
  finalProducts: [],
  sortOrder: ""
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    submitSearchForm(state: any, action: PayloadAction<ProductList>) {
      return { ...state, searchForm: action.payload, productIndex: 8, sortOrder: "" };
    },
    setPagination(state: ProductList) {
      return { ...state, productIndex: state.productIndex + 8 };
    },
    setSortOrder(state: ProductList, action: PayloadAction<string>) {
      return { ...state, sortOrder: action.payload };
    }
  },
  extraReducers: (builder) => {}
});

export const { submitSearchForm, setPagination, setSortOrder } = productListSlice.actions;

export default productListSlice.reducer;
