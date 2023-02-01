import React from 'react';
import { AppBar, Typography, Toolbar, MenuItem, Container } from '@material-ui/core';
import SearchBar from '../SearchBar/SearchBar';
import NavbarList from './NavbarList';
import "./Navbar.scss";

export default function Navbar() {

    const handleNavigation = (path: string) => { return "" };

    return (
        <AppBar position="static" color="transparent" className='appBar' >
            <Container maxWidth="xl">
                <Toolbar >
                    {NavbarList.map(({ name, path }) => {
                        return (
                            <MenuItem key={name} onClick={() => handleNavigation(path)}>
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
