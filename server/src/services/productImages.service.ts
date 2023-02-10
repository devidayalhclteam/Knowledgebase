import { Request, Response } from "express";
import { Status } from "../constants";
import { clientWithSAS } from "../dbConfig"

const getProductImages = async (req: Request, res: Response) => {
    try {
        let data = [];
        for await (const entity of clientWithSAS("productImages").listEntities()) {
            data.push(entity);
        }
        res.status(200).send({ status: Status.SUCCESS, data });
    } catch (error: any) {
        res.status(500).send({ status: Status.ERROR, error });
    }
}

export default { getProductImages };

