import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SearchBarSlice from "./pages/SearchBar/SearchBarSlice";
import HomeSlice from "./pages/Home/HomeSlice";
import DashboardSlice from "./pages/Dashboard/DashboardSlice";

const homeCombineReducers = combineReducers({
  searchBar: SearchBarSlice,
  home: HomeSlice,
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