import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectChangeEvent } from '@mui/material/Select';
import { BlobServiceClient } from '@azure/storage-blob';
import axios from "axios";

const blobSasUrl = "https://devgurukulstorage.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-03-06T11:23:49Z&st=2023-02-06T03:23:49Z&spr=https,http&sig=1rHz3PHMMb3Lwd8gTB7gcZQBGKrU57u%2FlB2uBqh3zPc%3D";
const blobServiceClient = new BlobServiceClient(blobSasUrl);
const containerName = 'knowledebase/productImage';
const containerClient = blobServiceClient.getContainerClient(containerName);

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
        isAddedSuccessfully: boolean,
        productAddedMessage: string,
    },
    productImageResponse: {
        etag: string;
        imageId: string;
        imageUrl1: string;
        isActive: boolean;
        partitionKey: string;
        productId: string;
        rowKey: string;
        timestamp: string;
    }
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
    productImageTable: {
        partitionKey: string,
        rowKey: string,
        imageId: string,
        imageUrl1: string,
        isActive: boolean,
        productId: string,
    },
    productImage: {
        imageFile: any
    },
    currentIndex: number,
    selectedProducts: [],
    isDisabledSubmitBtn: true;
    isModalOpen: any;
    modalViewName: string;
    isLoading: boolean;
    isAddProductSuccessful: string,
    isUpdatedProductSuccessful: string,
    isDeleteProductSuccessful: string
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
        etag: "string",
        isAddedSuccessfully: false,
        productAddedMessage: "Product Added Successfully",
    },
    productImageResponse: {
        etag: "string",
        imageId: "string",
        imageUrl1: "string",
        isActive: false,
        partitionKey: "string",
        productId: "string",
        rowKey: "string",
        timestamp: "string"
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
        rowKey: "",
    },
    productImageTable: {
        partitionKey: "productImage",
        rowKey: "",
        imageId: "",
        imageUrl1: "",
        isActive: true,
        productId: "",
    },
    productImage: {
        imageFile: {}
    },
    currentIndex: 1,
    selectedProducts: [],
    isDisabledSubmitBtn: true,
    isModalOpen: false,
    modalViewName: '',
    isLoading: false,
    isAddProductSuccessful: "",
    isUpdatedProductSuccessful: "",
    isDeleteProductSuccessful: ""
}

export const getProducts = createAsyncThunk(
    "dashboard/getProducts",
    async () => {
        try {
            const response = await axios.get("/api/table/products/products");
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
            const response = await axios.post("/api/table/products/products", payload);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const updateProducts = createAsyncThunk(
    "dashboard/updateProducts",
    async (payload: any) => {
        try {
            const response = await axios.put("/api/table/products/products", payload);
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
            const response = await axios.delete("/api/table/products/products",
                {
                    data: {
                        partitionKey: "product",
                        rowKey: payload
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const getProductImages = createAsyncThunk(
    "dashboard/getProductImages",
    async () => {
        try {
            const response = await axios.get("/api/table/productImages/productImages");
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const addProductImages = createAsyncThunk(
    "dashboard/addProductImages",
    async (payload: any) => {
        try {
            const response = await axios.post("/api/table/productImages/productImages", payload);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const updateProductImages = createAsyncThunk(
    "dashboard/updateProductImages",
    async (payload: any) => {
        try {
            const response = await axios.put("/api/table/productImages/productImages", payload);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const deleteProductImages = createAsyncThunk(
    "dashboard/deleteProductImages",
    async (payload: any) => {
        console.log("delet payload", payload);
        try {
            const response = await axios.delete("/api/table/productImages/productImages",
                {
                    data: {
                        partitionKey: "productImage",
                        rowKey: payload
                    }
                });
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
);

export const uploadImage = createAsyncThunk(
    "dashboard/uploaImage",
    async (payload: any) => {
        if (payload?.length) {
            try {
                const blockBlobClient = containerClient.getBlockBlobClient(payload[0].name);
                await blockBlobClient.uploadBrowserData(payload[0], {
                    onProgress: (ev: any) => {
                        console.log(`you have upload ${ev.loadedBytes} bytes`);
                        return "success";
                    }
                });
            }
            catch (error: any) {
                console.log(error.message);
                return error.message;
            }
        }
    }
);

export const deleteImage = createAsyncThunk(
    "dashboard/deleteImage",
    async (payload: any) => {
        if (payload?.length) {
            try {
                await containerClient.getBlockBlobClient(payload[0]).delete();
                return "Success"
            }
            catch (error: any) {
                console.log(error.message);
                return error.message
            }
        }
    }
);

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

// interface Products extends Request {    file: any;}

const productsSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setProductFormData: (state: any, action: PayloadAction<React.ChangeEvent<HTMLInputElement> | SelectChangeEvent>) => {
            const { name, value } = action.payload.target;
            state.productForm[name] = value;
        },
        setProductFormImageData: (state: any, action: PayloadAction<any>) => {
            state.productImage["imageFile"] = action.payload;
        },
        setProductRating: (state: any, action: PayloadAction<any>) => {
            const { name, value } = action.payload.target;
            state.productForm[name] = value;
        },
        setProductKey: (state: any, action: any) => {
            const productKey = action.payload;
            state.productForm["productId"] = productKey;
            state.productForm["rowKey"] = productKey;
            state.productImageTable["productId"] = productKey;
        },
        setImageTableProductKey: (state: any, action: PayloadAction<any[]>) => {
            const [productKey, imagePath] = action.payload;
            state.productImageTable["imageId"] = productKey;
            state.productImageTable["rowKey"] = productKey;
            state.productImageTable["imageUrl1"] = imagePath;
        },
        setProductFormDataOnEdit: (state: any, action: PayloadAction<any[]>) => {
            let formData = action.payload[0];
            let productForm = {
                categoryId: formData.categoryId,
                productId: formData.productId,
                description: formData.description,
                shortDescription: formData.shortDescription,
                isActive: formData.isActive,
                externalProductLink: formData.externalProductLink,
                productName: formData.productName,
                rating: formData.rating,
                partitionKey: "product",
                rowKey: formData.rowKey
            }

            state.productForm = productForm;
        },
        setProductImageTableDataOnEdit: (state: any, action: PayloadAction<any[]>) => {
            let formData = action.payload[0];
            let productImageTable = {
                productId: formData.productId,
                isActive: formData.isActive,
                imageUrl1: formData.imageUrl1,
                partitionKey: "productImage",
                rowKey: formData.rowKey,
                imageId: formData.imageId
            }
            state.productImageTable = productImageTable;
        },
        toggleAddProductModal: (state: any, action: PayloadAction<boolean>) => {
            state.isModalOpen = action.payload
        },
        setStateValue: (state: any, action: PayloadAction<any>) => {
            let key = action.payload[0];
            let value = action.payload[1];
            state[key] = value;
        },
        softDeleteImage: (state: any, action: PayloadAction<any>) => {
            state.productImageTable["isActive"] = action.payload;
        },
        resetProductForm: (state: any) => {
            state.productForm = initialState.productForm;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state: any) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(getCategories.fulfilled, (state: any, { payload }) => {
            return { ...state, categoryResponse: payload, isLoading: false };
        })
        builder.addCase(getCategories.rejected, (state: any) => {
            return { ...state, isLoading: false };
        })
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
            return { ...state, isAddProductSuccessful: payload.status, isLoading: false };
        })
        builder.addCase(addProducts.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(updateProducts.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(updateProducts.fulfilled, (state: Products, { payload }) => {
            return { ...state, isUpdatedProductSuccessful: payload.status, isLoading: false };
        })
        builder.addCase(updateProducts.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(deleteProduct.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(deleteProduct.fulfilled, (state: Products, { payload }) => {
            return { ...state, isDeleteProductSuccessful: payload.status, isLoading: false };
        })
        builder.addCase(deleteProduct.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(getProductImages.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(getProductImages.fulfilled, (state: Products, { payload }) => {
            return { ...state, productImageResponse: payload, isLoading: false };
        })
        builder.addCase(getProductImages.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(addProductImages.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(addProductImages.fulfilled, (state: Products, { payload }) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(addProductImages.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(updateProductImages.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(updateProductImages.fulfilled, (state: Products, { payload }) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(updateProductImages.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(deleteProductImages.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(deleteProductImages.fulfilled, (state: Products, { payload }) => {
            return { ...state, isDeleteProductSuccessful: payload.status, isLoading: false };
        })
        builder.addCase(deleteProductImages.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(uploadImage.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(uploadImage.fulfilled, (state: Products, { payload }) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(uploadImage.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(deleteImage.pending, (state: Products) => {
            return { ...state, isLoading: true };
        })
        builder.addCase(deleteImage.fulfilled, (state: Products, { payload }) => {
            return { ...state, isLoading: false };
        })
        builder.addCase(deleteImage.rejected, (state: Products) => {
            return { ...state, isLoading: false };
        })
    }
})

export const { setProductFormData, setStateValue, softDeleteImage, setProductFormImageData, setProductImageTableDataOnEdit, setProductRating, setProductKey, setProductFormDataOnEdit, setImageTableProductKey, toggleAddProductModal, resetProductForm } = productsSlice.actions;

export default productsSlice.reducer;