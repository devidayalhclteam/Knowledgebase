import React, { useEffect } from "react";
import { Container, Box, Grid, Typography, Button, Card, CardContent, CardActions } from "@material-ui/core";
import { Rating } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from "react-redux";
import productListSelector from "./ProductListSelector";
import { getProductImages, getImagesTable } from "../ProductHome/ProductHomeSlice";
import { getProducts } from "../Dashboard/DashboardSlice";
import { setPagination, setSortOrder } from "./ProductListSlice";
import { setDisplayView, setProductView } from "../Home/HomeSlice";
import type { AppDispatch } from "../../store";
import { sortSettings } from "./ProductListConstants";
import "./ProductList.scss";

export default function ProductList() {
  const { products, searchSelect, isLoadMoreDisabled, productIndex, sortOrder } = useSelector(productListSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductImages());
    dispatch(getImagesTable());
  }, []);

  const handlePagination = () => {
    dispatch(setPagination());
  };

  const handleSort = (e: SelectChangeEvent) => {
    dispatch(setSortOrder(e.target.value));
  };

  const handleCardAction = (productId: string) => {
    dispatch(setProductView(productId));
    dispatch(setDisplayView("productDetails"));
  };

  return (
    <Box className="productList">
      <Grid container className="productListGridHeader">
        <Grid item xs={12} md={12} sm={12} className="productListGridTitle">
          {searchSelect && <Typography className="productHomeText">{searchSelect}</Typography>}
        </Grid>
        <Grid item xs={12} md={12} sm={12} className="productListGridFilter">
          <Grid container className="productListGridFilterContainer">
            <Grid item xs={12} md={4} sm={4} className="productGridItem">
              {/* <Button variant="text">
                <FilterAltOutlinedIcon fontSize="medium" />
                <Typography className="productListFilterTitle">
                  Filter
                </Typography>
              </Button> */}
            </Grid>
            <Grid item xs={12} md={4} sm={4} className="productGridItem">
              <FormControl>
                <InputLabel id="sortBy-label">Sort By</InputLabel>
                <Select
                  variant="outlined"
                  labelId="sortBy-select"
                  className="sortSelect"
                  label="Sort by"
                  name="sortSelect"
                  onChange={(e: SelectChangeEvent) => handleSort(e)}
                  value={sortOrder}
                >
                  {sortSettings.map((sort: any) => {
                    return (
                      <MenuItem key={sort.id} value={sort.order} className="sortMenuItem" tabIndex={0}>
                        {sort.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="productListGrid" spacing={4}>
        {!!products.length &&
          products.slice(0, productIndex).map((product: any) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={product.productId} className="productListGridItem">
                <Card className="productListCard">
                  <CardContent className="productListCardContent">
                    <img className="productListImage" src={product.imageUrl1} alt={product.productName} />
                  </CardContent>
                  <CardActions
                    className="productListCardActions"
                    tabIndex={0}
                    onClick={() => handleCardAction(product.productId)}
                  >
                    <Typography className="productName">{product.productName}</Typography>
                    <Rating name="read-only" value={Number(product.rating)} className="productRating" />
                  </CardActions>
                </Card>
              </Grid>
            );
          })}

        <Grid item xs={10} sm={6} md={4} className="productListGridBtn">
          {isLoadMoreDisabled && (
            <Button variant="outlined" className="productLoadBtn" onClick={handlePagination} tabIndex={0}>
              Load More Products
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
