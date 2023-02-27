import { createSelector } from "@reduxjs/toolkit";

const productImagesState = (state: any) => state.home.productHome;
const dashboardSelect = (state: any) => state.dashboard.dashboard;
const productListSelect = (state: any) => state.home.productList;
const categoriesSelect = (state: any) => state.home.searchBar;

type Prod = {
  partitionKey: string;
  rowKey: string;
  productId: string;
  categoryId: string;
  description: string;
  externalProductLink: string;
  productName: string;
  shortDescription: string;
  rating: Number;
  isActive: boolean;
  timestamp: string;
  etag: string;
  imageUrl1: string;
};

const productListSelector = createSelector(
  productImagesState,
  dashboardSelect,
  productListSelect,
  categoriesSelect,
  (state: any, dashboardState: any, productListState: any, categoriesState: any) => {
    const { searchInput, searchSelect } = productListState.searchForm;

    const products: Prod[] =
      dashboardState.productResponse.data?.map((productA: any) => {
        let productB = state.imagesTableResponse.find((x: any) => x.productId === productA.productId);

        if (productB) {
          const { imageUrl1 } = productB;
          return { ...productA, imageUrl1 };
        } else {
          return { ...productA };
        }
      }) || [];

    let searchedProducts: Prod[] = [];

    if (searchInput && !searchSelect) {
      searchedProducts = products.filter(
        (product: Prod) => product.productName.toLowerCase().indexOf(searchInput.trim().toLowerCase()) >= 0
      );
    } else if (!searchInput && searchSelect) {
      searchedProducts = products.filter((product: Prod) => searchSelect === product.categoryId);
    } else if (searchSelect && searchSelect) {
      searchedProducts = products.filter(
        (product: Prod) =>
          searchSelect === product.categoryId &&
          product.productName.toLowerCase().indexOf(searchInput.trim().toLowerCase()) >= 0
      );
    } else {
      searchedProducts = products;
    }

    let searchSelectName;

    if (categoriesState.categoryResponse.data) {
      searchSelectName = categoriesState.categoryResponse.data.find(
        (category: any) => category.id === searchSelect
      )?.name;
    }

    const isLoadMoreDisabled = !(productListState.productIndex >= searchedProducts.length);

    if (productListState.sortOrder === "asc") {
      searchedProducts.sort((productA, productB) =>
        productA.productName.toLowerCase().localeCompare(productB.productName.toLowerCase())
      );
    } else if (productListState.sortOrder === "desc") {
      searchedProducts
        .sort((productA, productB) =>
          productA.productName.toLowerCase().localeCompare(productB.productName.toLowerCase())
        )
        .reverse();
    }

    return {
      products: searchedProducts,
      searchInput,
      searchSelect: searchSelectName || "",
      isLoadMoreDisabled,
      productIndex: productListState.productIndex,
      sortOrder: productListState.sortOrder
    };
  }
);

export default productListSelector;
