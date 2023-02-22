import React, { useEffect } from 'react';
import { Container, Box, Grid, Typography, Button, Paper, Card, CardContent, CardActions } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import Slider from 'react-slick';
import { getProductImages } from "./ProductHomeSlice";
import { getProducts } from "../Dashboard/DashboardSlice";
import productHomeSelector from "./ProductHomeSelector";
import type { AppDispatch } from "../../store";
import { topProductSettings, productHomeSettings, listedProductSettings } from "./ProductHomeConstants";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./ProductHome.scss";

export default function ProductHome() {
    const { productImages, products, topRatedProducts, newListedProducts } = useSelector(productHomeSelector);
    const dispatch = useDispatch<AppDispatch>();

    console.log(" useSelector(productHomeSelector)", useSelector(productHomeSelector))

    useEffect(() => {
        dispatch(getProductImages());
        dispatch(getProducts());
    }, []);

    return (
        <div className="productHome">
            <div className="productHomeContainer">
                <Slider {...productHomeSettings} className='productHomeCarousel'>
                    {!!products.length
                        && products.map((product: any) => {
                            return (
                                <Paper key={product.productId}>
                                    <Grid container className='productHomeGrid'>
                                        <Grid item xs={12} sm={5} md={5} >
                                            <Typography className="productHomeText">
                                                Find the best Product for you
                                            </Typography>
                                            <Typography className="productHomeSubText">
                                                {product.productName}
                                            </Typography>
                                            <Button variant="contained" className="productHomeButton" >
                                                Know More...
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={4}>
                                            <img alt='heroImage' src='' />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )
                        })}
                </Slider>
            </div>

            <div className="topProductContainer">
                <Grid container className='topProductGrid'>
                    <Grid item xs={12} sm={6} md={6} >
                        <Typography className="topProductText">
                            Top Products
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container className='topProductCarouselGrid'>
                    <Slider {...topProductSettings} className='topProductCarousel'>
                        {!!topRatedProducts.length
                            && topRatedProducts.map((product: any) => {
                                return (
                                    <Card key={product.productId} className='topProductCard'>
                                        <CardContent>
                                            <Typography className="">
                                                {product.productName}
                                            </Typography>
                                            {/* <Typography className="productHomeText">
                                            {item.description}

                                        </Typography> */}
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })}
                    </Slider>
                </Grid>
            </div>

            <div className="listedProductContainer">
                <Grid container className='listedProductGrid'>
                    <Grid item xs={12} sm={3} md={3} className='listedProductGridItem'>
                        <Typography className="listedProductText">
                            Newly Listed Products
                        </Typography>
                        <Typography className="listedProductSubText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros
                        </Typography>
                        <Button variant="outlined" className="listedProductButton" >SEE MORE </Button>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} className='listedProductGridItem'>
                        <Slider {...listedProductSettings} className='listedProductCarousel'>
                            {!!newListedProducts.length &&
                                newListedProducts.map((product: any) => {
                                    return (
                                        <Card key={product.productId} className='listedProductCard'>
                                            <CardContent>
                                                <Typography className="">
                                                    {product.productName}
                                                </Typography>

                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    )
                                })}
                        </Slider>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
