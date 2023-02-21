import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";

export interface Products {
    productResponse: {
        partitionKey: string;
        rowKey: string;
        productId: string;
        categoryId: string;
        description: string;
        externalProductLink: string;
        productName: string;
        shortDescription: string;
        rating: Number;
        isActive: boolean;
        timestamp: string;
        etag: string;
    },
    productForm: {
        categoryId: string;
        productId: string;
        description: string;
        shortDescription: string;
        isActive: Boolean;
        externalProductLink: string;
        productName: string;
        rating: Number,
        partitionKey: string;
        rowKey: string;
    },
    productFormErrors: {
        categoryIdError: string;
        descriptionError: string;
        externalProductLinkError: string;
        productNameError: string;
        ratingError: string;
    },
    isModalOpen: boolean;
    isLoading: boolean;
    isAddProductSuccessful: boolean
}

const initialState: Products = {
    productResponse: {
        partitionKey: "",
        rowKey: "string",
        categoryId: "string",
        productId: "string",
        description: "string",
        shortDescription: "string",
        isActive: false,
        externalProductLink: "string",
        productName: "string",
        rating: 0,
        timestamp: "string",
        etag: "string"
    },
    productForm: {
        categoryId: "",
        productId: "",
        description: "",
        shortDescription: "",
        isActive: true,
        externalProductLink: "",
        productName: "",
        rating: 0,
        partitionKey: "product",
        rowKey: ""
    },
    productFormErrors: {
        categoryIdError: "Please select category.",
        descriptionError: "Please enter description",
        externalProductLinkError: "Please enter website link",
        productNameError: "Please enter product name",
        ratingError: "Please give rating",
    },
    isModalOpen: false,
    isLoading: false,
    isAddProductSuccessful: false
}

const product: any = {

}

export const getProducts = createAsyncThunk(
    "dashboard/getProducts",
    async () => {
        try {
            const response = await axios.get("/api/products/products");
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const addProducts = createAsyncThunk(
    "dashboard/addProducts",
    async (payload: any) => {
        try {
            const response = await axios.post("/api/products/products", payload);
            console.log("add Product response.data", response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "dashboard/deleteProduct",
    async (payload: any) => {
        console.log("delet payload", payload);
        try {
            const response = await axios.delete("/api/products/products",
                {
                    data: {
                        partitionKey: "product",
                        rowKey: payload
                    }
                });
            console.log("add Product response.data", response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

// interface Products extends Request {    file: any;}

const productsSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setProductFormData: (state: any, action: PayloadAction<React.ChangeEvent<HTMLInputElement> | SelectChangeEvent>) => {
            const { name, value } = action.payload.target;
            state.productForm[name] = value;
        },
        setProductRating: (state: any, action: PayloadAction<any>) => {
            const { name, value } = action.payload.target;
            state.productForm[name] = value;
        },
        setProductKey: (state: any, action: any) => {
            console.log("action", action.payload);
            const productKey = action.payload;
            state.productForm["productId"] = productKey;
            state.productForm["rowKey"] = productKey;
        },
        toggleAddProductModal: (state: any, action: any) => {
            state.isModalOpen = action.payload
        },
        resetProductForm: (state: any) => {
            state.productForm = initialState.productForm;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(getProducts.fulfilled, (state: Products, { payload }) => {
            return { ...state, productResponse: payload, isLoading: false };
        })
        builder.addCase(getProducts.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(addProducts.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(addProducts.fulfilled, (state: Products, { payload }) => {
            console.log("add Product payload", payload);
            return { ...state, isAddProductSuccessful: payload.status, isLoading: false };
        })
        builder.addCase(addProducts.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(deleteProduct.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(deleteProduct.fulfilled, (state: Products, { payload }) => {
            console.log("deleteProduct payload", payload);
            // return { ...state, productResponse: payload, isLoading: false };
        })
        builder.addCase(deleteProduct.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
    }
})

export const { setProductFormData, setProductRating, setProductKey, toggleAddProductModal, resetProductForm } = productsSlice.actions;

export default productsSlice.reducer;