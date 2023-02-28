import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";

export interface SearchForm {
  searchForm: {
    searchSelect: string;
    searchInput: string;
  };
}

export interface Category extends SearchForm {
  categoryResponse: {
    partitionKey: string;
    rowKey: string;
    id: string;
    name: string;
    isActive: boolean;
    type: string;
    timestamp: string;
    etag: string;
  };
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
  isLoading: false,
  searchForm: {
    searchSelect: "All Categories",
    searchInput: ""
  }
};

export const getCategories = createAsyncThunk("home/getCategories", async () => {
  try {
    const response = await axios.get("/api/table/category/category");
    return response.data;
  } catch (error) {
    return error;
  }
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSearchForm(state: any, action: PayloadAction<SelectChangeEvent | React.ChangeEvent<HTMLInputElement>>) {
      const { name, value } = action.payload.target;
      state.searchForm[name] = value;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state: Category) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getCategories.fulfilled, (state: Category, { payload }) => {
      return { ...state, categoryResponse: payload, isLoading: false };
    });
    builder.addCase(getCategories.rejected, (state: Category) => {
      return { ...state, isLoading: false };
    });
  }
});

export const { setSearchForm } = categoriesSlice.actions;

export default categoriesSlice.reducer;
