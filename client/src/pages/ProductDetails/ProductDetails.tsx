import React from 'react';
import { Box, Grid, Typography, Button, Divider } from '@material-ui/core';
import { Rating } from '@mui/material';
import productDetailsSelector from "./ProductDetailsSelector";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetails.scss";

export default function ProductDetails() {
  const { displayProduct } = useSelector(productDetailsSelector);
  console.log("useSelector(productDetailsSelector):", useSelector(productDetailsSelector))


  if (!Object.keys(displayProduct).length) {
    return null;
  }

  return (
    <Box className="productDetails">
      <Grid container className='productDetailsGrid'>
        <Grid item xs={12} sm={4} md={4} className='productDetailsGridItem'>
          <img src={displayProduct.imageUrl1} alt={displayProduct.productName} />
        </Grid>

        <Grid item xs={12} sm={6} md={6} className='productDetailsGridItem'>
          <Grid container className='' spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="productDetailsName">
                {displayProduct.productName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className='productDetailsDescGrid'>
              <Typography className="productDetailsDesc">
                {displayProduct.description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
              <Button variant="contained" className='productDetailsLink' tabIndex="0"
                onClick={() => window.open(`${displayProduct.externalProductLink}`, "_blank")} >
                Website
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Divider className='divider' />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className='productDetailsRateGrid'>
              <Button variant="outlined" className='productDetailsRate' tabIndex="0">
                Rate the Product
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
