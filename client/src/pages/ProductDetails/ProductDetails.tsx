import React from "react";
import { Box, Grid, Typography, Button, Divider, Card, CardActions, CardContent } from "@material-ui/core";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import productDetailsSelector from "./ProductDetailsSelector";
import { relatedProductsSettings } from "../ProductHome/ProductHomeConstants";
import { setDisplayView, setProductView } from "../Home/HomeSlice";
import type { AppDispatch } from "../../store";
import "./ProductDetails.scss";

export default function ProductDetails() {
  const { displayProduct, relatedProducts } = useSelector(productDetailsSelector);
  const dispatch = useDispatch<AppDispatch>();

  if (!Object.keys(displayProduct).length) {
    return null;
  }

  const handleCardAction = (productId: string) => {
    dispatch(setProductView(productId));
    dispatch(setDisplayView("productDetails"));
  };

  return (
    <Box className="productDetails">
      <Grid container className="productDetailsGrid">
        <Grid item xs={12} sm={4} md={4} className="productDetailsGridItem">
          <img src={displayProduct.imageUrl1} alt={displayProduct.productName} />
        </Grid>

        <Grid item xs={12} sm={6} md={6} className="productDetailsGridItem">
          <Grid container className="" spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className="productDetailsName">{displayProduct.productName}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="productDetailsDescGrid">
              <Typography className="productDetailsDesc">{displayProduct.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Button
                variant="contained"
                className="productDetailsLink"
                tabIndex={0}
                onClick={() => window.open(`${displayProduct.externalProductLink}`, "_blank")}
              >
                Website
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Divider className="divider" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="productDetailsRateGrid">
              <Button variant="outlined" className="productDetailsRate" tabIndex={0}>
                Rate the Product
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {!!relatedProducts.length && (
        <Grid container className="productRelatedGrid">
          <Grid item xs={12} sm={10} md={10}>
            <Typography className="productRelatedTitle">RELATED PRODUCTS</Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            <Slider {...relatedProductsSettings} className="productRelatedCarousel">
              {relatedProducts.map((product: any) => {
                return (
                  <Card key={product.productId} className="productRelatedCard">
                    <CardContent className="productRelatedCardContent">
                      <img className="productRelatedImage" src={product.imageUrl1} alt={product.productName} />
                    </CardContent>
                    <CardActions
                      className="productRelatedCardActions"
                      tabIndex={0}
                      onClick={() => handleCardAction(product.productId)}
                    >
                      <Typography className="productName">{product.productName}</Typography>
                      <Rating name="read-only" value={Number(product.rating)} className="productRating" />
                    </CardActions>
                  </Card>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
