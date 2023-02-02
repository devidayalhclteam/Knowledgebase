import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import "./ProductHome.scss";

export default function ProductHome() {
    return (
        <div className="productHomeContainer">
            <Grid className="productHomeGrid" container spacing={2}>
                <Grid item xs={6}> item
                </Grid>
                <Grid item xs={3}> item
                </Grid>
            </Grid>
        </div>
    )
}
