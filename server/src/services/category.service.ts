import { Request, Response } from "express";
import { Status } from "../constants";
import { clientWithSAS } from "../dbConfig";
import { Category } from "../models";

const getCategories = async (req: Request, res: Response) => {
  try {
    let data: Category[] = [];
    for await (const entity of clientWithSAS("categories").listEntities()) {
      data.push(entity);
    }
    res.status(200).send({ status: Status.SUCCESS, data });
  } catch (error: any) {
    res.status(500).send({ status: Status.ERROR, error });
  }
};

const postCategory = async (req: Request, res: Response) => {
  try {
    const data = await clientWithSAS("categories").createEntity(req.body);
    res.status(200).send({ status: Status.SUCCESS, data });
  } catch (error: any) {
    res.status(500).send({ status: Status.ERROR, error });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const rowKey = "a4319198-507b-4dc1-ac3c-121013925993";

    const data = await clientWithSAS("categories").deleteEntity("category", rowKey);
    res.status(200).send({ status: Status.SUCCESS, data });
  } catch (error: any) {
    res.status(500).send({ status: Status.ERROR, error });
  }
};

export default { getCategories, postCategory, deleteCategory };
