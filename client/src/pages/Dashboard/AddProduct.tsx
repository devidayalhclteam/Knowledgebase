import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProducts, addProductImages, getProducts, uploadImage, setProductFormData, setImageTableProductKey, setProductRating, toggleAddProductModal, getProductImages, setProductFormImageData, updateProducts, updateProductImages, setStateValue, softDeleteImage, deleteImage } from "./DashboardSlice";
import dashboardSelector from "./DashboardSelector";
import type { AppDispatch } from "../../store";
import { Box, Grid, Typography, Button, TextField, MenuItem, InputLabel } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { displayAlert } from "../../components/Alert/AlertSlice";
import Delete from "../../images/delete.png";
import "./Dashboard.scss";

export default function AddProduct() {
    const dispatch = useDispatch<AppDispatch>();
    const [file, setFile] = useState<any>()
    const { productForm, categories, productImage, productImageTable, isDisabledSubmitBtn, productFormError, isAddProductSuccessful, modalViewName } = useSelector(dashboardSelector);
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
            dispatch(toggleAddProductModal(false));
            dispatch(setStateValue(["modalViewName", ""]));
            dispatch(setStateValue(["isAddProductSuccessful", ""]));
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

        dispatch(setProductFormImageData(files));
        dispatch(softDeleteImage(true));
        let imagePath = imageURL + (files && files[0]?.name);
        if (modalViewName === 'AddProduct') {
            dispatch(setImageTableProductKey([productKey, imagePath]));
        }
    }

    const handleSubmit = () => {
        !!imageFile && dispatch(uploadImage(imageFile));
        dispatch(addProductImages(productImageTable));
        dispatch(addProducts(productForm));
    }

    const handleSoftDelete = () => {
        dispatch(softDeleteImage(false));
    }

    const handleEditSubmit = () => {
        if (!productImageTable.isActive) {
            let imageName = productImageTable.imageUrl1.split('/');
            dispatch(deleteImage(imageName.slice(-1)));
        }
        !!imageFile && dispatch(uploadImage(imageFile));
        dispatch(updateProductImages(productImageTable));
        dispatch(updateProducts(productForm));
    }

    console.log("productFormError", productFormError);

    return (
        <>
            <Grid className='addProductModal'>
                {modalViewName === 'AddProduct' && <Typography className='addProdHeading'>Add Product</Typography>}
                {modalViewName === 'EditProduct' && <Typography className='addProdHeading'>Edit Product</Typography>}

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
                            {!!categories?.data && categories.data.map((category: any) => {
                                return <MenuItem value={category.id} key={category.id}>{category.name}</MenuItem>
                            })}
                        </Select>
                        <p className='error'>{productFormError.categoryIdError}</p>

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
                        <p className='error'>{productFormError.productNameError}</p>

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
                        <p className='error'>{productFormError.descriptionError}</p>

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
                        <p className='error'>{productFormError.externalProductLinkError}</p>

                        <InputLabel className="formLabel">
                            <span>Rate product</span>
                            <span>Your overall rating of this product</span>
                        </InputLabel>
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(e: any) => handleRating(e)}
                        />
                        <p className='error'>{productFormError.ratingError}</p>
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
                        {(modalViewName === 'EditProduct' && !!productImageTable?.imageUrl1 && !!productImageTable?.isActive && !file) &&
                            <div className='EditImage'>
                                <img src={Delete} alt="Delete" className='deleteImage' onClick={() => handleSoftDelete()} />
                                <img src={productImageTable.imageUrl1} className="uploadedImage"></img>
                            </div>
                        }

                        {modalViewName === 'AddProduct' &&
                            <Button variant="contained" className="submit" disabled={isDisabledSubmitBtn} onClick={() => handleSubmit()} >
                                <span> Submit</span>
                            </Button>
                        }
                        {modalViewName === 'EditProduct' &&
                            <Button variant="contained" className="submit" disabled={isDisabledSubmitBtn} onClick={() => handleEditSubmit()} >
                                <span> Submit</span>
                            </Button>
                        }
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}
