import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SearchBarSlice from "./pages/SearchBar/SearchBarSlice";
import HomeSlice from "./pages/Home/HomeSlice";
import ProductHomeSlice from "./pages/ProductHome/ProductHomeSlice";
import DashboardSlice from "./pages/Dashboard/DashboardSlice";
import ProductListSlice from "./pages/ProductList/ProductListSlice";
import ProductDetailsSlice from "./pages/ProductDetails/ProductDetailsSlice";

const homeCombineReducers = combineReducers({
  searchBar: SearchBarSlice,
  home: HomeSlice,
  productHome: ProductHomeSlice,
  productList: ProductListSlice,
  productDetails: ProductDetailsSlice
});

const dashboardReducers = combineReducers({
  dashboard: DashboardSlice
});

const rootReducer = combineReducers({
  home: homeCombineReducers,
  dashboard: dashboardReducers
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;