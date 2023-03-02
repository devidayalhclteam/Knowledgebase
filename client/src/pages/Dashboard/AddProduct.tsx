import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addProducts,
  addProductImages,
  getProducts,
  uploadImage,
  setProductFormData,
  setImageTableProductKey,
  setProductRating,
  toggleAddProductModal,
  getProductImages,
  setProductFormImageData,
  updateProducts,
  updateProductImages,
  setStateValue,
  softDeleteImage,
  deleteImage,
  setTempURL
} from "./DashboardSlice";
import dashboardSelector from "./DashboardSelector";
import type { AppDispatch } from "../../store";
import { Box, Grid, Typography, Button, TextField, MenuItem, InputLabel, FormHelperText } from "@material-ui/core";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { displayAlert } from "../../components/Alert/AlertSlice";
import Delete from "../../images/delete.png";
import "./Dashboard.scss";

export default function AddProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState<any>();
  const {
    productForm,
    categories,
    productImage,
    productImageTable,
    isDisabledSubmitBtn,
    isAddProductSuccessful,
    modalViewName,
    productFormErrors
  } = useSelector(dashboardSelector);
  const { productName, categoryId, description, externalProductLink, rating } = productForm;
  const { productNameError, categoryIdError, descriptionError, ratingError } = productFormErrors;
  let { imageFile, tempImageUrl } = productImage;

  useEffect(() => {
    if (isAddProductSuccessful === "success") {
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

  useEffect(() => {
    !productImageTable.isActive && dispatch(updateProductImages(productImageTable));
  }, [productImageTable])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
    dispatch(setProductFormData(e));
  };

  const handleRating = (e: any) => {
    dispatch(setProductRating(e));
  };

  const saveFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let productKey: any = uuidv4();
    let imageURL = "https://hclknowledebase.azureedge.net/productImage/";
    const { files } = e.target;
    var reader = new FileReader();
    var url = !!files && reader.readAsDataURL(files[0]);

    reader.onloadend = function (e) {
      setFile(reader.result);
    };
    let imagePath = imageURL + (files && files[0]?.name);

    dispatch(setProductFormImageData([files, imagePath]));
    dispatch(softDeleteImage(true));

    if (modalViewName === "AddProduct") {
      dispatch(setImageTableProductKey([productKey]));
    }
  };

  const isFormValid = () => {
    const isMandoryDataField = [
      productName, categoryId, description, rating
    ].every(Boolean);

    if (modalViewName === "AddProduct") {
      return isMandoryDataField;
    } else if (modalViewName === "EditProduct") {
      return isMandoryDataField && productImageTable.isActive
    }
  }

  const handleSubmit = () => {
    if (isFormValid()) {
      !!imageFile && dispatch(uploadImage(imageFile));
      dispatch(addProductImages(productImageTable));
      dispatch(addProducts(productForm));
    }
  };

  const handleSoftDelete = () => {
    dispatch(setTempURL(!!productImageTable && productImageTable.imageUrl1));
    dispatch(softDeleteImage(false));
  };

  const handleEditSubmit = () => {
    if (tempImageUrl !== productImageTable.imageUrl1) {
      let deletedImageName = tempImageUrl.split("/");
      dispatch(deleteImage(deletedImageName.slice(-1)));
      dispatch(setTempURL(''));
    }
    !!imageFile && dispatch(uploadImage(imageFile));
    dispatch(updateProductImages(productImageTable));
    dispatch(updateProducts(productForm));
  };

  return (
    <>
      <Grid className="addProductModal">
        {modalViewName === "AddProduct" && <Typography className="addProdHeading">Add Product</Typography>}
        {modalViewName === "EditProduct" && <Typography className="addProdHeading">Edit Product</Typography>}

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
              {!!categories?.data &&
                categories.data.map((category: any) => {
                  return (
                    <MenuItem value={category.id} key={category.id}>
                      {category.name}
                    </MenuItem>
                  );
                })}
            </Select>

            {!!categoryIdError && (
              <FormHelperText>{categoryIdError}</FormHelperText>
            )}

            <InputLabel className="formLabel">Product Name</InputLabel>
            <TextField
              required
              fullWidth
              id="standard-required"
              defaultValue="Hello World"
              variant="standard"
              name="productName"
              error={!!productNameError}
              helperText={productNameError}
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
              error={!!descriptionError}
              helperText={descriptionError}
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
            <Rating name="rating" value={rating} onChange={(e: any) => handleRating(e)} />
            {!!ratingError && (
              <FormHelperText>{ratingError}</FormHelperText>
            )}
          </Grid>
          <Grid item xs={4} md={4} sm={4} className="modalRightSide">
            <div className="uploadImage">
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
            {modalViewName === "EditProduct" &&
              !!productImageTable?.imageUrl1 &&
              !!productImageTable?.isActive &&
              !file && (
                <div className="EditImage">
                  <img src={Delete} alt="Delete" className="deleteImage" onClick={() => handleSoftDelete()} />
                  <img src={productImageTable.imageUrl1} className="uploadedImage"></img>
                </div>
              )}

            {modalViewName === "AddProduct" && (
              <Button
                variant="contained"
                className="submit"
                disabled={isDisabledSubmitBtn}
                onClick={() => handleSubmit()}
              >
                <span> Submit</span>
              </Button>
            )}
            {modalViewName === "EditProduct" && (
              <Button
                variant="contained"
                className="submit"
                disabled={(isDisabledSubmitBtn || !productImageTable.isActive)}
                onClick={() => handleEditSubmit()}
              >
                <span> Submit</span>
              </Button>
            )}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
