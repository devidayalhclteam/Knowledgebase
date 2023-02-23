import React from 'react';
import { AppBar, Typography, Toolbar, MenuItem } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import NavbarList from './NavbarList';
import "./Navbar.scss";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="transparent" className='appBar' >
            <Toolbar >
                <Grid container spacing={2}>
                    <Grid item xs={4} md={4} sm={4} className="nav-link">
                        {NavbarList.map(({ name, path }) => {
                            return (
                                <MenuItem key={name} onClick={() => navigate(path)} tabIndex={0} arial-label={name}>
                                    <Typography className="navLink">
                                        {name}
                                    </Typography>
                                </MenuItem>)
                        })}
                    </Grid>
                    <Grid item xs={6} md={6} sm={6} className="search-bar">
                        <SearchBar />
                    </Grid>
                    <Grid item xs={2} md={2} sm={2} className="profile"></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
