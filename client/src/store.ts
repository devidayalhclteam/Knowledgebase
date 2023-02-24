import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SearchBarSlice from "./pages/SearchBar/SearchBarSlice";
import HomeSlice from "./pages/Home/HomeSlice";
import ProductHomeSlice from "./pages/ProductHome/ProductHomeSlice";
import DashboardSlice from "./pages/Dashboard/DashboardSlice";
import ProductListSlice from "./pages/ProductList/ProductListSlice";
import ProductDetailsSlice from "./pages/ProductDetails/ProductDetailsSlice";
import alertSlice from "./components/Alert/AlertSlice";

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

const commonCombineReducers = combineReducers({
  alert: alertSlice
});

const rootReducer = combineReducers({
  home: homeCombineReducers,
  dashboard: dashboardReducers,
  common: commonCombineReducers
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
