export interface Category {
    partitionKey: string;
    rowKey: string;
    id: string;
    name: string;
    isActive: boolean;
    type: string;
    timestamp:string;
    etag:string;
};

export interface products {
    partitionKey: string;
    rowKey: string;
    productId: string;
    categoryId: string;
    description: string;
    externalProductLink: string;
    productName: string;
    shortDescription: string;
    rating: string;
    isActive: boolean;
    timestamp:string;
    etag:string;
};
