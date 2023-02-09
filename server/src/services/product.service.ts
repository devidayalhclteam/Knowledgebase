import { Request, Response } from "express";
import { Status } from "../constants";
import { clientWithSAS, blobService } from "../dbConfig"
import { Category } from "../models";

const baseUrl = "https://devgurukulstorage.blob.core.windows.net/knowledebase/productImage/"

const getProductImage = async (req: Request, res: Response) => {
    try {
        let data = [];

        for await (const blob of blobService().listBlobsFlat({ prefix: "productImage/" })) {
            data.push(`${baseUrl}${blob.name}`);
        }
        res.status(200).send({ status: Status.SUCCESS, data });
    } catch (error: any) {
        res.status(500).send({ status: Status.ERROR, error });
    }
}

// const postProductImage = async (req: Request, res: Response) => {
//     try {
//         const blockBlobClient = blobService().getBlockBlobClient(files[0].name);

//         await blockBlobClient.uploadBrowserData(files[0], {
//             onProgress: (ev: any) => {
//                 console.log(`you have upload ${ev.loadedBytes} bytes`);
//             }
//         });
//     }
//     catch (error: any) {
//         res.status(500).send({ status: Status.ERROR, error });
//     }
// }

export default { getProductImage, };