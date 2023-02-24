import { Request, Response } from "express";
import { Status } from "../constants";
import { clientWithSAS } from "../dbConfig";
import { products } from "../models";

const getProducts = async (req: Request, res: Response) => {
  try {
    let data: products[] = [];
    for await (const entity of clientWithSAS("products").listEntities()) {
      data.push(entity);
    }
    res.status(200).send({ status: Status.SUCCESS, data });
  } catch (error: any) {
    res.status(500).send({ status: Status.ERROR, error });
  }
};

const postProducts = async (req: Request, res: Response) => {
  try {
    const data = await clientWithSAS("products").createEntity(req.body);
    res.status(200).send({ status: Status.SUCCESS, data });
  } catch (error: any) {
    res.status(500).send({ status: Status.ERROR, error });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const rowKey = req.body.rowKey; //req.body

    const data = await clientWithSAS("products").deleteEntity("product", rowKey);
    res.status(200).send({ status: Status.SUCCESS, data });
  } catch (error: any) {
    res.status(500).send({ status: Status.ERROR, error });
  }
};

export default { getProducts, postProducts, deleteProduct };
