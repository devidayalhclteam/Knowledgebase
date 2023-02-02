import React from 'react';
import { AppBar, Typography, Toolbar, MenuItem, Container } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import NavbarList from './NavbarList';
import "./Navbar.scss";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="transparent" className='appBar' >
            <Container maxWidth="xl">
                <Toolbar >
                    {NavbarList.map(({ name, path }) => {
                        return (
                            <MenuItem key={name} onClick={() => navigate(path)}>
                                <Typography className="navLink">
                                    {name}
                                </Typography>
                            </MenuItem>)
                    })}
                    <SearchBar />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
