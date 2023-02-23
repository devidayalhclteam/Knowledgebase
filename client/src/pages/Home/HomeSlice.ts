import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Home {
    displayView: string;
    displayProductId:string;
}

const initialState: Home = {
    displayView: "productHome",
    displayProductId: ""
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setDisplayView: (state: Home, action: PayloadAction<string>) => {
            state.displayView = action.payload;
        },
        setProductView: (state: Home, action: PayloadAction<string>) =>{
            state.displayProductId = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
})

export const { setDisplayView , setProductView} = homeSlice.actions;

export default homeSlice.reducer;