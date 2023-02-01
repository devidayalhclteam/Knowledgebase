import React, { useEffect } from 'react'
import { TextField, Box, Select, MenuItem, Button } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./SearchBarSlice";
import type { RootState, AppDispatch } from "../../store";
import "./SearchBar.scss"

export default function SearchBar() {
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
                label="All Category"
                value={"All Category"}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button variant='contained' className='searchBarButton'>Search</Button>
        </Box>

    )
}
