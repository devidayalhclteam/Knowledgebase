import React from "react";
import { AppBar, Typography, Toolbar, MenuItem } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import NavbarList from "./NavbarList";
import { setDisplayView } from "../Home/HomeSlice";
import type { AppDispatch } from "../../store";
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleNavigation = (path: string) => {
    if (path === "/") {
      dispatch(setDisplayView("productHome"));
    }
    navigate(path);
  };

  return (
    <AppBar position="static" color="transparent" className="appBar">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={4} md={5} sm={5} className="nav-link">
            {NavbarList.map(({ name, path }) => {
              return (
                <MenuItem key={name} onClick={() => handleNavigation(path)} tabIndex={0} arial-label={name}>
                  <Typography className="navLink">{name}</Typography>
                </MenuItem>
              );
            })}
          </Grid>
          <Grid item xs={12} md={6} sm={12} className="search-bar">
            <SearchBar />
          </Grid>
          <Grid item xs={2} md={1} sm={1} className="profile"></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
