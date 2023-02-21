import React, { useEffect } from 'react'
import { Box, Select, MenuItem, Button, } from '@material-ui/core';
import { Input, InputAdornment } from "@mui/material"
import Search from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./SearchBarSlice";
import categoriesSelector from "./SearchBarSelector";
import type { AppDispatch } from "../../store";
import "./SearchBar.scss"

export default function SearchBar() {
  const { categories } = useSelector(categoriesSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCategories());
  }, []);


  return (
    <Box sx={{ minWidth: 120 }} className='searchBarBox'>
      <Input
      aria-label='Search'
        className="searchBarText"
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="end" className='searchBarIcon'>
            <Search fontSize="medium" name="search" />
          </InputAdornment>
        }
      />
      <Select
        className='searchBarSelect'
        label="All Category"
      >
        {(categories || []).map((category: any) => {
          return (
            <MenuItem key={category.rowKey} value={category.id}
              className='searchBarMenu' tabIndex="0">
              {category.name}
            </MenuItem>)
        })}
      </Select>
      <Button variant='contained' className='searchBarButton' aria-label='Search' >Search</Button>
    </Box>

  )
}
