import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit";
import axios from "axios";

export interface Home {
    displayView: string;
}

const initialState: Home = {
    // displayView:"productList",
    displayView:"productHome"
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        // setDisplayView: (state: Home,  action: PayloadAction<Home>) => {
        //     state.displayView = action.payload;
        // },
    },
    extraReducers: (builder) => {

    }
})

export const { } = homeSlice.actions;

export default homeSlice.reducer;