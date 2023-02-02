import React, { useEffect } from 'react'
import { TextField, Box, Select, MenuItem, Button,  } from '@material-ui/core';
import  { Input,InputAdornment} from "@mui/material"
import Search from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./SearchBarSlice";
import categoriesSelector from "./SearchBarSelector";
import type { RootState, AppDispatch } from "../../store";
// import { Category } from './SearchBarSlice';
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
                    return (<MenuItem key={category.rowKey} value={category.id} className='searchBarMenu'>
                        {category.name}
                    </MenuItem>)
                })}
            </Select>
            <Button variant='contained' className='searchBarButton'>Search</Button>
        </Box>

    )
}
