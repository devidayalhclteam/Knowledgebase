import React, { useEffect } from 'react';
import { Container, Box, Grid, Typography, Button, Paper, Card, CardContent, CardActions } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import Slider from 'react-slick';
import { getProductImages } from "./ProductHomeSlice";
import productImagesSelector from "./ProductHomeSelector";
import type { AppDispatch } from "../../store";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./ProductHome.scss";

export default function ProductHome() {
    const { productImages } = useSelector(productImagesSelector);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProductImages());
    }, []);

    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #23",
            description: "hey how are you"
        }
    ]

    const products = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            description: "Probably the most  thing you have ever seen!"
        },
        {
            name: "Random Name #4",
            description: " World!"
        },
        {
            name: "Random Name #5",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #6",
            description: "Hello World!"
        },
        {
            name: "Random Name #7",
            description: "Hello !"
        }
    ];

    const productHomeSettings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: false,
        pauseOnFocus: true,
    }

    const topProductSettings = {
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        arrows: true,
        swipe: true,
        adaptiveHeight: true,
        centerMode: true,
    }

    const listedProductSettings = {
        dots:true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        arrows: false,
        swipe: true,
        adaptiveHeight: true,
        centerMode: true,
    }

    return (
        <div className="productHome">
            <div className="productHomeContainer">
                <Slider {...productHomeSettings} className='productHomeCarousel'>
                    {items.map((item: any, index: any) => {
                        return (
                            <Paper key={`${item.name}${index}`}>
                                <Grid container className='productHomeGrid'>
                                    <Grid item xs={12} sm={5} md={5} >
                                        <Typography className="productHomeText">
                                            Find the best Product for you
                                        </Typography>
                                        <Typography className="productHomeSubText">
                                            {item.description}
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
                        {products.map((item: any, index: any) => {
                            return (
                                <Card key={`${item.name}${index}`} className='topProductCard'>
                                    <CardContent>
                                        <Typography className="">
                                            {item.name}
                                        </Typography>
                                        <Typography className="productHomeText">
                                            {item.description}

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
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} className='listedProductGridItem'>
                        <Slider {...listedProductSettings} className='listedProductCarousel'>
                            {products.map((item: any, index: any) => {
                                return (
                                    <Card key={`${item.name}${index}`} className='listedProductCard'>
                                        <CardContent>
                                            <Typography className="">
                                                {item.name}
                                            </Typography>
                                            <Typography className="">
                                                {item.description}

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
