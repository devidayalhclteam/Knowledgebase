import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProducts, addProductImages, getProducts, uploadImage, setProductFormData, setImageTableProductKey, setProductRating, toggleAddProductModal, getProductImages, setProductFormImageData } from "./DashboardSlice";
import dashboardSelector from "./DashboardSelector";
import type { AppDispatch } from "../../store";
import { Box, Grid, Typography, Button, TextField, MenuItem, InputLabel } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { displayAlert } from "../../components/Alert/AlertSlice";
import "./Dashboard.scss";

export default function AddProduct() {
    const dispatch = useDispatch<AppDispatch>();
    const [file, setFile] = useState<any>()
    const { productForm, productImage, productImageTable, isDisabledSubmitBtn, isAddProductSuccessful, isDeleteProductSuccessful } = useSelector(dashboardSelector);
    const { productName, categoryId, description, externalProductLink, rating } = productForm;
    const { imageFile } = productImage;

    useEffect(() => {
        if (isAddProductSuccessful === 'success') {
            dispatch(
                displayAlert({
                    severity: "success",
                    title: "Success",
                    message: "Product added successfully"
                })
            );
            dispatch(getProducts());
            dispatch(getProductImages());
            dispatch(toggleAddProductModal(false))
        }

    }, [isAddProductSuccessful]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
        dispatch(setProductFormData(e))
    }

    const handleRating = (e: any) => {
        dispatch(setProductRating(e))
    }

    const saveFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        let productKey: any = uuidv4();
        let imageURL = 'https://hclknowledebase.azureedge.net/productImage/'
        const { files } = e.target;
        var reader = new FileReader();
        var url = !!files && reader.readAsDataURL(files[0]);

        reader.onloadend = function (e) {
            setFile(reader.result);
        }

        dispatch(setProductFormImageData(files))
        let imagePath = imageURL + (files && files[0]?.name);
        dispatch(setImageTableProductKey([productKey, imagePath]));
    }

    const handleSubmit = () => {
        dispatch(uploadImage(imageFile));
        dispatch(addProductImages(productImageTable));
        dispatch(addProducts(productForm));
    }

    return (
        <>
            <Grid className='addProductModal'>
                <Typography className='addProdHeading'>Add Product*</Typography>
                <Box component="form">
                    <Grid item xs={8} md={8} sm={8} className="modalLeftSide">
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
                    <Grid item xs={4} md={4} sm={4} className="modalRightSide">
                        <div className='uploadImage'>
                            <TextField
                                required
                                fullWidth
                                type="file"
                                id="outlined-textarea"
                                placeholder="Browse"
                                name="imageFile"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => saveFile(e)}
                            />
                            <p>Upload Image</p>
                        </div>
                        {!!file && <img src={file} className="uploadedImage"></img>}
                        {/* <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => saveFile(e)} /> */}
                        <Button variant="contained" className="submit" disabled={isDisabledSubmitBtn} onClick={() => handleSubmit()} >
                            <span> Submit</span>
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}
