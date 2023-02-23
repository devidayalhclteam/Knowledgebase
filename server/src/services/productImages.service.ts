import { Request, Response } from "express";
import { Status } from "../constants";
import { clientWithSAS } from "../dbConfig"
import { Category } from "../models";

const baseUrl = "https://devgurukulstorage.blob.core.windows.net/knowledebase/productImage/"

const getProductImage = async (req: Request, res: Response) => {
    let files = req;
    try {
        let data: any[] = [];
        for await (const entity of clientWithSAS("productImages").listEntities()) {
            data.push(entity);
        }
        res.status(200).send({ status: Status.SUCCESS, data });
    } catch (error: any) {
        res.status(500).send({ status: Status.ERROR, error });
    }
}

const postProductImage = async (req: Request, res: Response) => {
    try {
        try {
            const data = await clientWithSAS("productImages").createEntity(req.body);
            res.status(200).send({ status: Status.SUCCESS, data });
        } catch (error: any) {
            res.status(500).send({ status: Status.ERROR, error });
        }
    }
    catch (error: any) {
        res.status(500).send({ status: Status.ERROR, error });
    }
}

const deleteProductImage = async (req: Request, res: Response) => {
    try {
        const rowKey = req.body.rowKey;      //req.body

        const data = await clientWithSAS("productImages").deleteEntity(
            "productImage",
            rowKey
        );
        res.status(200).send({ status: Status.SUCCESS, data });
    }
    catch (error: any) {
        res.status(500).send({ status: Status.ERROR, error });
    }
}

export default { getProductImage, postProductImage, deleteProductImage };
