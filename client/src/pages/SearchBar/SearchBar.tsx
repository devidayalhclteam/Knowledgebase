import React, { useEffect } from 'react'
import { TextField, Box, Select, MenuItem, Button, InputLabel } from '@material-ui/core';
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
            <TextField id="outlined-basic" variant="outlined" className="searchBarText" />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className='searchBarSelect'
                label="All Category"
            >
                {(categories || []).map((category: any) => {
                    return (<MenuItem key={category.rowKey} value={category.id}  className='searchBarMenu'>
                        {category.name}
                    </MenuItem>)
                })}
            </Select>
            <Button variant='contained' className='searchBarButton'>Search</Button>
        </Box>

    )
}
