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
