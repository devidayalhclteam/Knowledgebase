import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlobServiceClient } from "@azure/storage-blob";
import {
  getProducts,
  setStateValue,
  deleteProduct,
  deleteImage,
  setProductKey,
  toggleAddProductModal,
  resetProductForm,
  getProductImages,
  deleteProductImages
} from "./DashboardSlice";
import dashboardSelector from "./DashboardSelector";
import type { AppDispatch } from "../../store";
import { Container, Grid, Typography, Button, Modal, Backdrop, Fade, TextField, Input } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Rating from "@mui/material/Rating";
import AddProduct from "./AddProduct";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import ProductsImage from "../../images/products.png";
import FilterImage from "../../images/filter.png";
import SearchImage from "../../images/search.png";
import "./Dashboard.scss";
import { displayAlert } from "../../components/Alert/AlertSlice";
import { getCategories } from "../SearchBar/SearchBarSlice";

export default function Dashboard() {
  const { products, productImages, isModalOpen, selectedProducts, currentIndex, isDeleteProductSuccessful } =
    useSelector(dashboardSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductImages());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    getSelectedProducts();
  }, [products, currentIndex]);

  useEffect(() => {
    let productKey: any = uuidv4();
    isModalOpen ? dispatch(setProductKey(productKey)) : dispatch(resetProductForm());
  }, [isModalOpen]);

  useEffect(() => {
    console.log("inside isDeleteProductSuccessful", isDeleteProductSuccessful);
    if (isDeleteProductSuccessful === "success") {
      console.log("Inside isDeleteProductSuccessful");
      dispatch(
        displayAlert({
          severity: "success",
          title: "Success",
          message: "Product deleted successfully"
        })
      );
      dispatch(getProducts());
    }
  }, [isDeleteProductSuccessful]);

  const getSelectedProducts = () => {
    let selectedProducts = !!products && products.slice(0, currentIndex * 12);
    dispatch(setStateValue(["selectedProducts", selectedProducts]));
  };

  const getImage = (prodId: any) => {
    let imageData =
      !!productImages &&
      productImages.filter((img: any) => {
        if (img.productId === prodId) {
          return img.imageUrl1;
        }
      });

    let imageUrl = !!imageData && imageData[0]?.imageUrl1;
    return !!imageUrl && imageUrl;
  };

  const handleModal = (data: boolean) => {
    dispatch(toggleAddProductModal(data));
  };

  const handleDelete = (rowKey: any) => {
    dispatch(deleteProduct(rowKey));
    let productTableRowKey = productImages.filter((data: any) => data.productId === rowKey);
    let imageName = productTableRowKey[0].imageUrl1.split("/");
    console.log(imageName.slice(-1));
    dispatch(deleteProductImages(productTableRowKey[0].rowKey));
    dispatch(deleteImage(imageName.slice(-1)));
  };

  const loadMore = () => {
    dispatch(setStateValue(["currentIndex", currentIndex + 1]));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = e.target.value;
    let searchProduct =
      !!products &&
      products.filter((product: any) => {
        return product.productName.toLowerCase().match(new RegExp(searchValue, "g"));
      });
    !!searchProduct && dispatch(setStateValue(["selectedProducts", searchProduct]));
    !searchValue.length && getSelectedProducts();
  };

  return (
    <>
      <Grid item xs={12} md={12} sm={12} className="dashboard">
        <Container className="dashboardContainer">
          <Grid item xs={12} md={9} sm={9} className="dashboardLeftContainer">
            <Grid item xs={12} md={12} sm={12} className="topContainer">
              <div className="productsLabel">
                <img src={ProductsImage} />
                <span>Products</span>
              </div>
              <Button variant="contained" className="addProductButton" onClick={() => handleModal(true)}>
                <ControlPointIcon /> <span> Add Product</span>
              </Button>
            </Grid>
            <Grid item xs={12} md={12} sm={12} className="filterContainer">
              <Button variant="contained" className="addProductButton">
                <img src={FilterImage} /> <span>Filter</span>
              </Button>
              <div className="filterSearch">
                <img src={SearchImage} />
                <Input
                  className="searchBarText"
                  placeholder="Search..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12} sm={12} className="productList" spacing={2}>
              {!!selectedProducts &&
                selectedProducts.map((product: any, index: number) => {
                  let rowkey = product.rowKey;
                  let imageUrl = product?.productId && getImage(product.productId);
                  return (
                    <Grid item xs={3} md={3} sm={3} className="cardContainer">
                      <Card className="prodCard" key={index}>
                        <div className="imageContainer">
                          <Button variant="contained" className="editBtn">
                            <img src={Edit} alt="Edit" />
                          </Button>
                          <Button variant="contained" className="deleteBtn" onClick={() => handleDelete(rowkey)}>
                            <img src={Delete} alt="Delete" />
                          </Button>
                        </div>
                        <div className="productImage">{!!imageUrl && <img src={imageUrl}></img>}</div>
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
                        <CardActions className="cardContainer">
                          <Rating name="simple-controlled" value={product.rating} />
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
            <Grid item xs={12} md={12} sm={12} className="loadMore">
              <Button className="loadMoreBtn" onClick={() => loadMore()}>
                Load More
              </Button>
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
          timeout: 500
        }}
      >
        <Fade in={isModalOpen}>
          <AddProduct />
        </Fade>
      </Modal>
    </>
  );
}
