import React from 'react';
import { Container, Box, Grid, Typography, Button } from '@material-ui/core';
import "./ProductHome.scss";

export default function ProductHome() {
    return (
        <div className="productHome">
            <div className="productHomeContainer">
                <Grid container className='productHomeGrid' spacing={2}>
                    <Grid item xs={12} sm={5} md={5} >
                        <Typography className="productHomeText">
                            Find the best Product for you
                        </Typography>
                        <Button variant="contained" className="productHomeButton" >
                            Know More...
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                        <img alt='heroImage' src='' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
