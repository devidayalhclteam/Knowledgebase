import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Paper, Card, CardContent, CardActions, Link } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import Slider from 'react-slick';
import { Rating, Fab } from '@mui/material';
import { KeyboardArrowUp } from "@mui/icons-material";
import { getProductImages, getImagesTable } from "./ProductHomeSlice";
import { getProducts } from "../Dashboard/DashboardSlice";
import productHomeSelector from "./ProductHomeSelector";
import type { AppDispatch } from "../../store";
import { topProductSettings, productHomeSettings, listedProductSettings, blogs } from "./ProductHomeConstants";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./ProductHome.scss";

export default function ProductHome() {
    const { products, topRatedProducts, newListedProducts } = useSelector(productHomeSelector);
    const dispatch = useDispatch<AppDispatch>();
    const [state, setState] = useState(false);

    // console.log(" useSelector(productHomeSelector)", useSelector(productHomeSelector))

    useEffect(() => {
        dispatch(getProductImages());
        dispatch(getProducts());
        dispatch(getImagesTable())
    }, []);

    const handleSeeAll = () => {
        setState(!state);
    }

    return (
        <Grid className="productHome" >
            <Grid container className="productHomeContainer">
                <Slider {...productHomeSettings} className='productHomeCarousel'
                >
                    {!!products.length && 
                         products.map((product: any) => {
                            return (
                                <Paper key={product.productId}>
                                    <Grid container className='productHomeGrid'>
                                        <Grid item xs={12} sm={7} md={7}>
                                            <Typography className="productHomeText">
                                                Find the best Product for you
                                            </Typography>
                                            <Typography className="productHomeSubText">
                                                {product.shortDescription}
                                            </Typography>
                                            <Button variant="contained" className="productHomeButton"
                                                onClick={() => window.open(`${product.externalProductLink}`, "_blank")}>
                                                Know More...
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={5} md={5}>
                                            <img alt='heroImage' src={product.imageUrl1} className='productHomeImage' />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )
                        })}
                </Slider>
            </Grid >

            <Grid className="topProductContainer">
                <Grid container className='topProductGrid'>
                    <Grid item xs={12} sm={8} md={8} >
                        <Typography className="topProductText">
                            Top Products
                        </Typography>
                        <Typography className="topProductSubText">
                            Some of the best featured categories on entire website include top rated products
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container className='topProductCarouselGrid'>
                    <Slider {...topProductSettings} className='topProductCarousel'  style={{width:'1182px', height:'372px', padding: '10px 0px 5px 0px'}}>
                        {!!topRatedProducts.length
                            && topRatedProducts.map((product: any) => {
                                return (
                                    <Card key={product.productId} className='topProductCard' >
                                        <CardContent className='topProductCardContent' style={{ width:'362px', height:'282px', margin:'0px auto', padding:'0px'}}>
                                            <img className='topProductImage'
                                                src={product.imageUrl1} alt={product.productName} style={{width:'282px', height:'282px', margin:'0px auto'}}/>
                                        </CardContent>
                                        <CardActions className='topProductCardActions'>
                                            <Button variant='contained' size="medium" className='topProductName'>
                                                <Typography className='topProductText'>
                                                    {product.productName}
                                                </Typography>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                )
                            })}
                    </Slider>
                </Grid>
            </Grid>

            <Grid className="listedProductContainer">
                <Grid container className='listedProductGrid'>
                    <Grid item xs={12} sm={3} md={3} className='listedProductGridItem'>
                        <Typography className="listedProductText">
                            Newly Listed Products
                        </Typography>
                        <Typography className="listedProductSubText">
                            All the products that been creating a buzz in the industry have got listed on this love month
                        </Typography>
                        <Button variant="outlined" className="listedProductButton" >SEE MORE </Button>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} className='listedProductGridItem'>
                        <Slider {...listedProductSettings} className='listedProductCarousel'>
                            {!!newListedProducts.length &&
                                newListedProducts.map((product: any) => {
                                    return (
                                        <Card key={product.productId} className='listedProductCard'>
                                            <CardContent className='listedProductCardContent'>
                                                <img className='listedProductImage'
                                                    src={product.imageUrl1} alt={product.productName} />
                                            </CardContent>
                                            <CardActions className='listedProductCardActions'>
                                                <Rating name="read-only" value={product.rating} />
                                                <Typography className="listedProductName">
                                                    {product.productName}
                                                </Typography>
                                            </CardActions>
                                        </Card>
                                    )
                                })}
                        </Slider>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className="blogContainer">
                <Grid container className='blogTileGrid'>
                    <Grid item xs={12} sm={4} md={4} className='blogTileGridItem'>
                        <Typography className="blogTitle">
                            LATEST FROM BLOG
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} className='blogLinkGridItem'>
                        <Link className='blogLink' underline="none" onClick={handleSeeAll} > SEE ALL</Link>
                    </Grid>
                </Grid>
                <Grid container className='blogGrid' spacing={3}>
                    {!!blogs.length && blogs.slice(0, 3).map((blog: any) => {
                        return (
                            <Grid key={blog.productId} item xs={12} sm={4} md={4} className='blogGridItem'>
                                <Card className='blogCard'>
                                    <CardContent className='blogCardContent'>
                                        <img className='blogImage'
                                            src={blog.imageUrl} alt={blog.name} />
                                    </CardContent>
                                    <CardActions className='blogCardActions'>
                                        <Typography className="blogName" >
                                            {blog.name}
                                        </Typography>
                                        <Typography className="blogDesc" >
                                            {blog.description.slice(0, 100)}
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                    {state && !!blogs.length && blogs.length > 3 && blogs.slice(3).map((blog: any, index) => {
                        return (
                            <Grid key={`${blog.name}${index}`} item xs={12} sm={4} md={4} className='blogGridItem'>
                                <Card className='blogCard'>
                                    <CardContent className='blogCardContent'>
                                        <img className='blogImage'
                                            src={blog.imageUrl} alt={blog.name} />
                                    </CardContent>
                                    <CardActions className='blogCardActions'>
                                        <Typography className="blogName" >
                                            {blog.name}
                                        </Typography>
                                        <Typography className="blogDesc" >
                                            {blog.description.slice(0, 100)}
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>

            <Grid container className="scrollContainer">
                <Fab
                    onClick={() => window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })}
                    size="small"
                    aria-label="scroll back to top"
                    className='scrollButton'
                >
                    <KeyboardArrowUp className='scrollIcon' />
                </Fab>
            </Grid>


        </Grid>
    )
}
