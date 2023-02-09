import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    getProducts, addProducts, deleteProduct, setProductKey, setProductFormData,
    setProductRating, toggleAddProductModal, resetProductForm
} from "./DashboardSlice";
import dashboardSelector from "./DashboardSelector";
import type { RootState, AppDispatch } from "../../store";
import {
    Container, Box, Grid, Typography, Button, Modal, Backdrop, Fade, TextField,
    MenuItem, InputLabel
} from '@material-ui/core';
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Rating from '@mui/material/Rating';
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import "./Dashboard.scss";
import { log } from 'console';

export default function Dashboard() {
    const { products, productForm, isModalOpen } = useSelector(dashboardSelector);
    const { productName, categoryId, description, externalProductLink, rating, productId, rowKey } = productForm;
    console.log("productForm", productForm);
    const dispatch = useDispatch<AppDispatch>();

    const [value, setValue] = React.useState<any | null>(2);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        let productKey: any = uuidv4();
        isModalOpen ?
            dispatch(setProductKey(productKey)) :
            dispatch(resetProductForm());
    }, [isModalOpen]);

    const handleModal = (data: any) => {
        dispatch(toggleAddProductModal(data))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
        dispatch(setProductFormData(e))
    }

    const handleRating = (e: any) => {
        console.log(e.target);
        console.log(e.target.value);
        dispatch(setProductRating(e))
    }

    const isFormValid = () => {
        return true;
    }

    const handleSubmit = () => {
        // if (isFormValid()) {
        //     // let productKey: any = uuidv4();
        //     // dispatch(setProductKey(productKey))
        //     // dispatch(addProducts(productForm));
        // }

        // let productKey: any = uuidv4();
        // dispatch(setProductKey(productKey));
        dispatch(addProducts(productForm));
    }

    const handleDelete = (rowKey: any) => {
        console.log("rowKey", rowKey);
        let deletePayload = {
            "rowKey": rowKey,
            "partitionKey": "product"
        }
        dispatch(deleteProduct(rowKey));
    }

    return (
        <>
            <Grid item xs={12} md={12} sm={12} className='dashboard'>
                <Container className='dashboardContainer'>
                    <Grid item xs={12} md={9} sm={9} className='dashboardLeftContainer'>
                        <Grid item xs={12} md={12} sm={12} className='topContainer'>
                            <Button variant="contained" className="addProductButton" onClick={() => handleModal(true)} >
                                <ControlPointIcon /> <span> Add Product</span>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} className='filterContainer'>
                            <Button variant="contained" className="addProductButton" >
                                <span> Filter</span>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={12} sm={12} className='productList' spacing={2}>
                            {
                                !!products && products.map((product: any, index: number) => {
                                    console.log("product", product);
                                    console.log("product", product.rowKey);
                                    let rowkey = product.rowKey;
                                    return (
                                        <Grid item xs={3} md={3} sm={3} className="cardContainer">
                                            <Card className="prodCard" key={index}>
                                                <div className='imageContainer'>
                                                    <Button variant="contained" className="editBtn" >
                                                        <img src={Edit} alt="Edit" />
                                                    </Button>
                                                    <Button variant="contained" className='deleteBtn' onClick={() => handleDelete(rowkey)} >
                                                        <img src={Delete} alt="Delete" />
                                                    </Button>

                                                </div>
                                                <CardMedia
                                                    sx={{ height: 140 }}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" className="productHeading">
                                                        {product.productName}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className='cardContainer'>
                                                    <Rating
                                                        name="simple-controlled"
                                                        value={product.rating}
                                                    />
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} sm={3} className="dashboardRightContainer"></Grid>
                </Container>
            </Grid>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isModalOpen}
                onClose={() => handleModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <Grid className='addProductModal'>
                        <Typography className='addProdHeading'>Add Product*</Typography>
                        <Box component="form">
                            <Grid item xs={8} md={8} sm={8}>
                                <InputLabel className="formLabel">Category</InputLabel>
                                <Select
                                    required
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="category"
                                    value={categoryId}
                                    name="categoryId"
                                    onChange={(e: SelectChangeEvent) => handleChange(e)}
                                >
                                    <MenuItem value="3418b48e-d2d7-4177-8d1a-808320d74e7a">Mental Health</MenuItem>
                                    <MenuItem value="5cafcfa3-9903-4b7f-ac3e-c133908406f8">Vision</MenuItem>
                                    <MenuItem value="a4319198-507b-4dc1-ac3c-121013925993">Neurodiversity</MenuItem>
                                    <MenuItem value="c1119198-300w-4dc1-ac3c-121013925111">Learning</MenuItem>
                                    <MenuItem value="c37a5a96-95b2-4c94-a6a1-f0b798f1ab9e">Mobility</MenuItem>
                                    <MenuItem value="d5019198-507b-4dc1-ac3c-121013925992">Hearing</MenuItem>
                                </Select>

                                <InputLabel className="formLabel">Product Name</InputLabel>
                                <TextField
                                    required
                                    fullWidth
                                    id="standard-required"
                                    defaultValue="Hello World"
                                    variant="standard"
                                    name="productName"
                                    value={productName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                />


                                <InputLabel className="formLabel">Describe the Product</InputLabel>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    placeholder="Placeholder"
                                    name="description"
                                    value={description}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                    multiline
                                />

                                <InputLabel className="formLabel">External Website Link</InputLabel>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-textarea"
                                    placeholder="Placeholder"
                                    name="externalProductLink"
                                    value={externalProductLink}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                />

                                <InputLabel className="formLabel">
                                    <span>Rate product</span>
                                    <span>Your overall rating of this product</span>
                                </InputLabel>
                                <Rating
                                    name="rating"
                                    value={rating}
                                    onChange={(e: any) => handleRating(e)}
                                />
                            </Grid>
                            <Grid item xs={4} md={4} sm={4}>
                                {/* <Button variant="contained" className="knowMore" >
                                    <span> Know More</span>
                                </Button> */}
                                <Button variant="contained" className="submit" onClick={() => handleSubmit()} >
                                    <span> Submit</span>
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Fade>
            </Modal >

        </>
    )
}
