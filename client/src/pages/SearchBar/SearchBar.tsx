import React, { useEffect, ChangeEvent } from "react";
import { Box, MenuItem, Button } from "@material-ui/core";
import { Input, InputAdornment } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, setSearchForm } from "./SearchBarSlice";
import { submitSearchForm } from "../ProductList/ProductListSlice";
import searchBarSelector from "./SearchBarSelector";
import { setDisplayView } from "../Home/HomeSlice";
import type { AppDispatch } from "../../store";
import "./SearchBar.scss";

type InputType = ChangeEvent<HTMLInputElement> | SelectChangeEvent;

export default function SearchBar() {
  const { categories, searchForm } = useSelector(searchBarSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleSearch = (e: InputType) => {
    dispatch(setSearchForm(e));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(submitSearchForm(searchForm));
    dispatch(setDisplayView("productList"));
  };

  return (
    <Box sx={{ minWidth: 120 }} className="searchBarBox">
      <Input
        aria-label="Search"
        className="searchBarText"
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="end" className="searchBarIcon">
            <Search fontSize="medium" name="search" />
          </InputAdornment>
        }
        name="searchInput"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
        value={searchForm.searchInput}
      />
      <Select
        className="searchBarSelect"
        label="All Category"
        onChange={(e: InputType) => handleSearch(e)}
        name="searchSelect"
        value={searchForm.searchSelect}
        defaultValue="All Categories"
      >
        {(categories || []).map((category: any) => {
          return (
            <MenuItem key={category.rowKey} value={category.id} className="searchBarMenu" tabIndex="0">
              {category.name}
            </MenuItem>
          );
        })}
      </Select>
      <Button variant="contained" className="searchBarButton" aria-label="Search" onClick={(e) => handleSubmit(e)}>
        Search
      </Button>
    </Box>
  );
}
