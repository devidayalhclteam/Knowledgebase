import { Request, Response } from "express";
import { Status } from "../constants";
import { clientWithSAS, blobService, containerClient1 } from "../dbConfig"
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

interface MulterRequest extends Request {
    file: any;
}

const addProductImage = async (req: any, res: Response) => {
    try {
        console.log(req.files.file);

        if (!req.files) {
            res.status(400).send({ status: Status.ERROR, error: "No file uploaded" });
        }

        let file = req.files.file;
        const blockBlobClient = containerClient1.getBlockBlobClient(file.name);
        await blockBlobClient.upload(file, file.size);

        res.status(200).send({ status: Status.SUCCESS, });
    }
    catch (error: any) {
        res.status(500).send({ status: Status.ERROR, error });
    }
}

export default { getProductImage, addProductImage };