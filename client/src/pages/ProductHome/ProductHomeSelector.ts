import { createSelector } from "@reduxjs/toolkit";

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
}

const productImagesState = (state: any) => state.home.productHome;
const dashboardSelect = (state: any) => state.dashboard.dashboard;

const productHomeSelector = createSelector(productImagesState, dashboardSelect,
    (state: any, dashboardState: any) => {
        const products: Prod[] = dashboardState.productResponse.data || [];

        const categories = [...new Set(products.map((product: Prod) => product.categoryId))];

        const topRatedProducts = categories.map((categoryId: string) => {
            let productsIncategory = products.filter((product: Prod) => product.categoryId === categoryId);
            let topRated = productsIncategory.reduce(
                (prev: Prod, current: Prod) => prev.rating > current.rating ? prev : current);
            return topRated;
        })
        

        const newListedProducts = products.slice().sort((productA: Prod, productB: Prod) =>
            new Date(productB.timestamp).getTime() - new Date(productA.timestamp).getTime()).slice(0, 5);

        return {
            // isLoading: state.isLoading,
            productImages: state.productImagesResponse,
            products,
            topRatedProducts,
            newListedProducts,
            isLoading: dashboardState.isLoading,
        }
    }
)

export default productHomeSelector;