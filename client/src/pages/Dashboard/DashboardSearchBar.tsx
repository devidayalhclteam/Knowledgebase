import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Input, InputAdornment } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { setStateValue } from "./DashboardSlice";
import dashboardSelector from "./DashboardSelector";
import type { AppDispatch } from "../../store";

export default function DashboardSearchBar(props: any) {
  const dispatch = useDispatch<AppDispatch>();

  const { searchKeyword, products, currentIndex } = useSelector(dashboardSelector);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = e.target.value.trim().toLowerCase();
    dispatch(setStateValue(["searchKeyword", searchValue]));
    !searchValue.length && props.getSelectedProducts();
  };

  const getSelectedProducts = () => {
    let selectedProducts = !!products && products.slice(0, currentIndex * 12);
    dispatch(setStateValue(["selectedProducts", selectedProducts]));
  };

  const handleSubmit = () => {
    let searchProduct =
      !!products &&
      products.filter((product: any) => {
        return product.productName.trim().toLowerCase().match(new RegExp(searchKeyword, "g"));
      });
    !!searchProduct && dispatch(setStateValue(["selectedProducts", searchProduct]));
    !searchProduct.length
      ? dispatch(setStateValue(["NoDataFound", true]))
      : dispatch(setStateValue(["NoDataFound", false]));

    !searchKeyword.length && getSelectedProducts();
  };

  return (
    <div className="filterSearch">
      <Input
        className="searchBarText"
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="end" className="searchBarIcon">
            <Search fontSize="medium" name="search" />
          </InputAdornment>
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
      />
      <Button variant="contained" className="searchBarButton" aria-label="Search" onClick={() => handleSubmit()}>
        Search
      </Button>
    </div>
  );
}
