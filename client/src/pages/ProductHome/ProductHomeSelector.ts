import { createSelector } from "@reduxjs/toolkit";
import { blogs } from "./ProductHomeConstants";

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
}

const productImagesState = (state: any) => state.home.productHome;
const dashboardSelect = (state: any) => state.dashboard.dashboard;

const productHomeSelector = createSelector(productImagesState, dashboardSelect,
    (state: any, dashboardState: any) => {

        const products: Prod[] = dashboardState.productResponse.data?.map((productA: any) => {
            let productB = state.imagesTableResponse.find((x: any) => x.productId === productA.productId);

            if (productB) {
                const { imageUrl1 } = productB;
                return { ...productA, imageUrl1 }
            } else {
                return { ...productA };
            }
        }) || [];

        const categories = [...new Set(products.map((product: Prod) => product.categoryId))];

        const topRatedProducts = categories.map((categoryId: string) => {
            let productsIncategory = products.filter((product: Prod) => product.categoryId === categoryId);
            let topRated = productsIncategory.reduce(
                (prev: Prod, current: Prod) => prev.rating > current.rating ? prev : current);
            return topRated;
        })

        const newListedProducts = products.slice().sort((productA: Prod, productB: Prod) =>
            new Date(productB.timestamp).getTime() - new Date(productA.timestamp).getTime()).slice(0, 10);

        const blogsPrimary = !!blogs.length && blogs.slice(0, 3) || [];
        const blogsSecondary = !!blogs.length && blogs.length > 3 && blogs.slice(3) || [];

        return {
            // isLoading: state.isLoading,
            productImages: state.productImagesResponse,
            products,
            topRatedProducts,
            newListedProducts,
            isLoading: dashboardState.isLoading,
            imagesTableResponse: state.imagesTableResponse,
            blogsPrimary,
            blogsSecondary
        }
    }
)

export default productHomeSelector;