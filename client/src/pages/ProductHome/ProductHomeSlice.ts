import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { blobService } from "../../dbConfig";

export interface ProductHome {
  isLoading: boolean;
  productImagesResponse: [];
  imagesTableResponse: [];
}

const initialState: ProductHome = {
  isLoading: false,
  productImagesResponse: [],
  imagesTableResponse: []
};

export const getProductImages = createAsyncThunk("home/getProductImages", async () => {
  let data = [];
  const baseUrl = "https://HCLknowledebase.azureedge.net/";

  try {
    for await (let blob of blobService.listBlobsFlat()) {
      data.push(`${baseUrl}${blob.name}`);
    }
    return { status: "success", data };
  } catch (error: any) {
    return { status: "error", error };
  }
});

export const getImagesTable = createAsyncThunk("home/getImagesTable", async () => {
  try {
    const response = await axios.get("/api/table/productImages/productImages");
    return response.data;
  } catch (error) {
    return error;
  }
});

const productImagesSlice = createSlice({
  name: "productImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductImages.pending, (state: any) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getProductImages.fulfilled, (state: any, { payload }) => {
      return { ...state, productImagesResponse: payload.data, isLoading: false };
    });
    builder.addCase(getProductImages.rejected, (state: any) => {
      return { ...state, isLoading: false };
    });

    builder.addCase(getImagesTable.pending, (state: any) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getImagesTable.fulfilled, (state: any, { payload }) => {
      return { ...state, imagesTableResponse: payload.data, isLoading: false };
    });
    builder.addCase(getImagesTable.rejected, (state: any) => {
      return { ...state, isLoading: false };
    });
  }
});

export const {} = productImagesSlice.actions;

export default productImagesSlice.reducer;
