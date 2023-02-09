import React from 'react';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import "./ProductList.scss";

export default function ProductList() {
  return (
    <div className="productListContainer">
      product list
      <Grid container className='productHomeGrid' spacing={2}>
        <Grid item xs={8}>
          <Typography className="productHomeText">
            Find the best Product for you
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
